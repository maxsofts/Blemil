var app = angular.module('blemilApp', ['ngRoute']);
/**
 * Router
 */
app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'inc/pages/home.html',
                controller: 'HomeController',
                title: 'Trang chủ'
            })
            .when('/about', {
                templateUrl: 'inc/pages/about.html',
                controller: 'AboutController',
                title: 'Giới thiệu'
            })
            .when('/contact', {
                templateUrl: 'inc/pages/contact.html',
                controller: 'ContactController',
                title: 'Liên hệ'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
app.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.title = current.$$route.title;
        }
    });
}]);
/**
 * Controller
 */
//Home
app.controller('HomeController', function ($scope) {
    $scope.data = "Ở xin chào đây là trang chủ";
});
//About us
app.controller('AboutController', 'myService', function ($scope, myService) {
    $scope.data = "Ở xin chào đây trang about us";
});
app.controller('ContactController', 'myService', function ($scope, myService) {
    $scope.data = "Ở xin chào đây trang liên hệ";
});


/**
 * Component
 */
//Header
app.component('comHeader', {
    'templateUrl': 'inc/modules/header.html',

    controller: function blemil_header() {

        this.menus = [
            {
                name: "Về BT Foods",
                link: "#!/about",
                active: true
            },
            {
                name: "Câu truyện Blemil Plus",
                link: "#!/truyen",
                active: false
            },
            {
                name: "Tìm hiểu Blemil Plus",
                link: "#!/truyen",
                active: false
            },
            {
                name: "Quà tặng bé yêu",
                link: "#!/truyen",
                active: false
            },
            {
                name: "Mua Blemil ở đâu",
                link: "#!/truyen",
                active: false
            },
            {
                name: "Tin tức",
                link: "#!/contact",
                active: false
            },
            {
                name: "Liên hệ",
                link: "#!/contact",
                active: false
            }
        ]
    }
});
//Footer
app.component('comFooter', {
    'templateUrl': 'inc/modules/footer.html',
    controller: function blemil_footer() {

    }
});