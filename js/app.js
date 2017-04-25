var app = angular.module("app", []);

app.controller("tabelaFormulario", function($scope) {
  $scope.registro = { Colunas: [], Linhas: []};
  $scope.coluna = {};
  //Coluna
  $scope.adicionarColuna = function () {
    $scope.registro.Colunas.push($scope.coluna);
    $scope.coluna = {};
    $scope.fecharModalColuna();
  };

  $scope.editarColuna = function(coluna) {

    $scope.abrirModaladicionarColuna();
    $scope.coluna = coluna;
  };

  $scope.moverColuna = function(coluna, acao) {
    for (var i in $scope.registro.Colunas) {
      if ($scope.registro.Colunas[i] == coluna)
      $scope.registro.Colunas.splice(parseInt(i) + acao, 0, $scope.registro.Colunas.splice(i, 1)[0]);
    }
  };

  $scope.removerColuna = function(coluna) {
    for (var i in this.registro.Colunas) {
      if ($scope.registro.Colunas[i] == coluna)
      $scope.registro.colunas.splice(i, 1);
    }
    $scope.coluna = {};
    $scope.fecharModalColuna();
  };

  $scope.fecharModalColuna = function() {
    $("#myModal").modal('toggle');
  };

  $scope.abrirModaladicionarColuna = function() {
    $scope.coluna = {};
    $("#myModal").modal('show');
  };

  //Linha
  $scope.adicionarLinha = function () {
    $scope.registro.Linhas.push({});
  };

  $scope.moverLinha = function(linha, acao) {
    for (var i in $scope.registro.Linhas) {
      if ($scope.registro.Linhas[i] == linha)
      $scope.registro.Linhas.splice(parseInt(i) + acao, 0, $scope.registro.Linhas.splice(i, 1)[0]);
    }
  };

  $scope.removerLinha = function(linha) {
    for (var i in $scope.registro.linhas) {
      if ($scope.registro.Linhas[i] == linha)
      $scope.registro.Linhas.splice(i, 1);
    }
  };

});
