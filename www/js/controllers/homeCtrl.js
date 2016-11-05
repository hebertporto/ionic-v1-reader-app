angular
    .module('novel.controllers')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$state', '$interval', '$ionicSlideBoxDelegate'];

    function homeCtrl ($state, $interval, $ionicSlideBoxDelegate) {
        var vm = this;

        vm.settings = {
          enableFriends: true
        };

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
            $state.go('novel');
        }


        var maxSlides = 5;
        var slideCounter = 2;

        vm.data = {};
        vm.data.slides = [
            {
                title : "Slide 1",
                data  : "Slide 1 Content"
            },
            {
                title : "Slide 2",
                data  : "Slide 2 Content"
            }
        ];

      $ionicSlideBoxDelegate.update();



    var intervalId = $interval( function() {


        if( slideCounter < maxSlides) {

            slideCounter++;
            console.log('Adding a slide');
            vm.data.slides.push( {
                title : "Slide " + slideCounter,
                data : "Slide " + slideCounter + ' Content'
            });

            $ionicSlideBoxDelegate.update();
        } else {
            console.log('All full!');
            $interval.cancel(intervalId);
        }
    }, 3000);

    }
