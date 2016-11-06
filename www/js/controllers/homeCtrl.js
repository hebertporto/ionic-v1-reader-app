angular
    .module('novel.controllers')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$state', '$interval'];

    function homeCtrl ($state, $interval) {
        var vm = this;

        vm.title    = "Lista de Novels";
        vm.novels   = getNovels();
        vm.goNovel  = goNovel;

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
            $state.go('app.novel');
        }

    }
