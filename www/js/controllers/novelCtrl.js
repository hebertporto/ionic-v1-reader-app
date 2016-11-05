angular
    .module('novel')
    .controller('novelCtrl', novelCtrl);

    novelCtrl.$inject = ['$state'];

    function novelCtrl ($state) {
        var vm           = this;

        vm.novel         = getNovel();
        vm.listChapters  = getChapters();
        vm.goChapter     = goChapter;

        function getNovel(){
                return {
                    title          : "Tales of Demons and Gods",
                    description    : "This is a basic Card which contains an item that has wrapping text. This is a basic Card which contains an item that has wrapping text.",
                    img_url        : "https://saikaiscan.com.br/site/wp-content/uploads/2016/09/TDG.jpg",
                    authors        : ["Author 1", "Author 2"],
                    status         : "Ativo",
                    start_date     : "01/01/2015",
                    end_date       : "",
                    admin_project  : ["SkaiScan", "ScanTGD"]
                };
        }

        function getChapters(){
            return [
                {num:001 , title: "Título do Capítulo", data_lancamento: "01/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:002 , title: "Título do Capítulo", data_lancamento: "02/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:003 , title: "Título do Capítulo", data_lancamento: "03/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:004 , title: "Título do Capítulo", data_lancamento: "04/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:005 , title: "Título do Capítulo", data_lancamento: "05/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]},
                {num:006 , title: "Título do Capítulo", data_lancamento: "06/11/2016", translators: ["jiraya", "luffY"], reviewers: ["kratZ"]}
            ];
        }

        function goChapter(chapter){
            console.log("chapter", chapter);
            $state.go('chapter');
        }
    }
