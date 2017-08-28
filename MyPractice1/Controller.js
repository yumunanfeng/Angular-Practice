var app = angular.module('myApp',[]);
app.controller('myCtrl', function ($scope) {
    //初始化
    $scope.MyAppInit = function () {
        $scope.firstName = "三三";
        $scope.lastName = "思思";

        $scope.point1 = [10,20,30,40,50];

        $scope.point2 = [
            {num1: '111'},
            {num2: '222'},
            {num3: '333'},
            {num4: '4443'}
        ];

        $scope.age1 = '啦啦1';




    }

    // 控制错误信息是否显示
    $scope.DisplayError = {
        NameIsError1: false,
        NameIsError2: false
    };

    // 查询条件输入提示信息
    $scope.DisplayErrorTip = {
        NameIsError1Tip: "这是不对的，请重新输入",
        NameIsError2Tip: "这也是错的，再来一次"
    };

    $scope.testSubmit1 = function () {

    };






});
//自定义指令
app.directive("setDirective1", function () {
    return{
        restrict: "E",
        template: "自定义了个指令1"

        //restrict 的取值可以有三种：A 用于元素的 Attribute，这是默认值 <div set-directive></div>
        //                         E 用于元素的名称,这也是默认值    <set-directive></set-directive>
        //                         C 用于 CSS 中的 class    <div class="set-directive"></div>
        //                         M 用于注释   <!-- directive: set-directive -->
    }
});
app.directive('setDirective2', function () {
   return{
       restrict: "A",
       template: "自定义了个指令2"
   }
});
app.directive('setDirective3', function () {
   return{
       restrict: "C",
       template: "自定义了个指令3"
   }
});

