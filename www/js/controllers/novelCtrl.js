angular
    .module('novel')
    .controller('novelCtrl', novelCtrl);

    novelCtrl.$inject = ['$state'];

    function novelCtrl ($state) {
        var vm        = this;

        vm.novel         = getNovel();
        vm.listChapters  = getChapters();
        vm.goChapter     = goChapter;

        function getNovel(){
                return {
                    title          : "Novel",
                    description    : "This is a basic Card which contains an item that has wrapping text.",
                    img_url        : "http://i9.mangareader.net/tales-of-demons-and-gods/7/tales-of-demons-and-gods-6189499.jpg",
                    authors        : ["Author 1", "Author 2"],
                    status         : "Ativo",
                    start_date     : "01/01/2015",
                    end_date       : " - ",
                    admin_project  : "SkaiScan"
                };
        }

        function getChapters(){
            return [
                {num:001 , title: "Título do Capítulo 1", data_lancamento: "01/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:002 , title: "Título do Capítulo 2", data_lancamento: "02/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:003 , title: "Título do Capítulo 3", data_lancamento: "03/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:004 , title: "Título do Capítulo 4", data_lancamento: "04/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:005 , title: "Título do Capítulo 5", data_lancamento: "05/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:006 , title: "Título do Capítulo 6", data_lancamento: "06/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]}
            ];
        }

        function goChapter(){
            $state.go('chapter');
        }
    }
