angular
    .module('novel')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$cordovaInAppBrowser', '$state'];

    function homeCtrl ($scope, $cordovaInAppBrowser, $state) {
        var vm = this;

        vm.titlePage  = "Lista de Novels";

        vm.novels     = getNovels();
        vm.goNovel    = goNovel();

        function getNovels(){
            return [
                {id: 1, title: "Novel 1", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"},
                {id: 2, title: "Novel 2", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"},
                {id: 3, title: "Novel 3", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"},
                {id: 4, title: "Novel 4", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"},
                {id: 5, title: "Novel 5", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"},
                {id: 6, title: "Novel 6", description: "This is a basic Card which contains an item that has wrapping text.", img_url:"http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg"}
            ];
        }

        function goNovel(){
            return $state.go('novel');
        }
    }
