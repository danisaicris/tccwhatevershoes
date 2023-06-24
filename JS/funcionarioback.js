const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

//configuração da conexão com o banco de dados

const config = {
    server: 'WHATEVER_SHOES.mssql.somee.com',
    user: 'Danisaicris_SQLLogin_1',
    password: '64gtzowxzx',
    database: 'WHATEVER_SHOES',
    options: {
        encrypt: true 
    }
};

sql.connect(config, function (err) {
    if (err) {
        console.log('Erro ao conectar ao banco de dados:', err);

        return;
    }
    console.log('Conectando ao banco de dados.');

    //definir as rotas do crud aqui
    app.get('/usuarios', function(req, res){
        const query = 'SELECT * FROM funcionarios';

        sql.query(query, function(err, result){
            if (err) {
                console.log('Erro ao buscar funcionarios:', err);
                res.status(500).json({ error: 'Erro ao buscar funcionarios'
                });
            } else {
                res.json(result.recordset); 
            }
        });
    });

    app.get('usuarios/:id', function(req, res){
        const Id_func = req.params.id; //obtem o id do usuario da url
        
        const query = 'SELECT * FROM funcionarios WHERE id =@Id_func';

        const params = {
            Id_func: { value: Id_func, type: sql.Int }
        };

        sql.query(query, params, function(err, result) {
            if (err) {
                console.log('Erro ao buscar funcionario:', err);
            res.status(500).json({ error: 'Erro ao buscar funcionario'});           
         } else {
            if (result.recordset.length == 0) {
                res.status(404).json({ error: 'funcionario não encontrado'});
 } else {
    res.json(result.recordset[0]);
 }

     }
        });
    });
    app.post('/funcionario', function(req, res){
        const {senha, status_func, nome, funcao, sexo, email, salario, dt_demissao, dt_admissao} = req.body;

        const query = 'INSERT INTO funcionarios (Senha, status_func, nome, funcao, sexo, email, salario, dt_demissao, dt_admissao) VALUES (@Senha, @status_func, @nome, @funcao, @sexo, @email, @salario, @dt_demissao, @dt_admissao)';

        const params = {
            senha: { value: senha, type: sql.VarChar },
            status_func: { value: status_func, type: sql.VarChar },
            nome: { value: nome, type: sql.VarChar},
            funcao: {value: funcao, type: sql.VarChar},
            sexo: {value: sexo, type: sql.Char}, 
            email: {value: email, type: sql.VarChar},
            salario: {value: salario, type: sql.VarChar},
            dt_demissao: {value: dt_demissao, type: sql.Date}, 
            dt_admissao: { value: dt_admissao, type: sql.Date}

        };
        sql.query(query.params, function(err, result){
            if (err) {
                console.log('Ero ao criar funcionario:', err);
                res.status(500).json({ error: 'Erro ao criar funcionario'});
            } else {
                res.json({ message : 'Funcionario criado com sucesso'});
            }
        });
    });
    const Id_func = req.params.id;

    const {senha, status_func, nome, funcao, sexo, email, salario, dt_demissao, dt_admissao} = req.body;

    if (!senha || !status_func || !nome || !funcao || !sexo || !email || !salario || !dt_demissao || !dt_admissao) {
        res.status(400).json({ error: 'senha, status_func, nome, funcao, sexo, email, salario, dt_demissao, dt_admissao'});
        return;
    }
    Funcionario.update(novoFuncionario, { where: { id: Id_func}})
    .then(numLinhasAfetadas => {
        if (numLinhasAfetadas[0] == 0) {
            res.status(404).json({ error: 'Funcionario não encontrado'});
        } else {
            res.json({ message: 'Funcionario atualizado com sucesso'});
        }
    })
    .catch(error => {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro ao atualizar funcionario'});
    });
    FuncionarioModel.findByIdAndUpdate(Id_Func, novoFuncionario)
  .then(funcionario => {
    if (!funcionario) {
      res.status(404).json({ error: 'Funcionario não encontrado' });
    } else {
      res.json({ message: 'Funcionario atualizado com sucesso' });
    }
  })
  .catch(error => {
    console.error('Erro ao atualizar Funcionario:', error);
    res.status(500).json({ error: 'Erro ao atualizar funcionario' });
  });

  const Id_Func = req.params.id;

  Funcionario.destroy({ where: {id: Id_Func}})
  .then(numLinhasAfetadas => {
    if (numLinhasAfetadas === 0 ) {
        res.status(404).json({ error: 'Funcionario não encontrado'});
    } else {
        res.json({ message: 'Funcionario excluido com sucesso'});

    }
  })
  .catch(error => {
    console.error('Erro ao excluir funcionario', error);
    res.status(500).json({ error: 'Erro ao excluir funcionario'});

    });
    FuncionarioModel.findByIdAndDelete(Id_Func)
  .then(funcionario => {
    if (!funcionario) {
      res.status(404).json({ error: 'Funcionario não encontrado' });
    } else {
      res.json({ message: 'Funcionario excluído com sucesso' });
    }
  })
  .catch(error => {
    console.error('Erro ao excluir funcionario:', error);
    res.status(500).json({ error: 'Erro ao excluir funcionario' });
  });

  });
  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Iniciar o servidor
app.listen(port, function () {
  console.log('Servidor Node.js em execução na porta ' + port);
});
