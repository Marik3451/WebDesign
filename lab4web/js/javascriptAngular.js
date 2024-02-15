angular.module('myApp', []).controller('userCtrl', function ($scope) {

    //    $scope.index = 0;
    //    $scope.LENGTH = 0;
    //    $scope.fName = '';
    //    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.cars = [
        // {id: 1, fName: 'Hege', lName: "Pege"},
        // {id: 2, fName: 'Kim', lName: "Pim"},
        // {id: 3, fName: 'Sal', lName: "Smith"},
        // {id: 4, fName: 'Jack', lName: "Jones"} AudiA4,
        // {id: 5, fName: 'John', lName: "Doe"},
        // {id: 6, fName: 'Peter', lName: "Pan"}
        { id: 1, name: 'Skoda Octavia', yearOfRelease: 2018, color: 'White', engineCapacity: '1.9 tdi', weight: '1250kg', carType: "Sedan", price: '800$/day', photoURL: 'images/SkodaOctavia.jpeg' },
        { id: 2, name: 'Audi A4', yearOfRelease: 2020, color: 'Gray', engineCapacity: '2.2 tdi', weight: '1200kg', carType: "Universal", price: '1100$/day', photoURL: 'images/AudiA4.jpeg' },
        { id: 3, name: 'BMW M5', yearOfRelease: 2022, color: 'Black-green', engineCapacity: '2.5 tdi', weight: '1480kg', carType: "Sedan", price: '1500$/day', photoURL: 'images/BMWM5.jpeg' },
        { id: 4, name: 'Audi Q7', yearOfRelease: 2019, color: 'White', engineCapacity: '3.5 tdi', weight: '1500kg', carType: "Crossover", price: '1050$/day', photoURL: 'images/AudiQ7.jpeg' },
        { id: 5, name: 'Volkswagen Golf 7', yearOfRelease: 2017, color: 'Black', engineCapacity: '1.9 tdi', weight: '1000kg', carType: "Universal", price: '700$/day', photoURL: 'images/Golf.jpeg' },
        { id: 6, name: 'BMW X5', yearOfRelease: 2023, color: 'Blue', engineCapacity: '3.3 tdi', weight: '1300kg', carType: "Crossover", price: '1200$/day', photoURL: 'images/BMWX5.jpeg' },
        { id: 7, name: 'Rolls-Royce Cullinan', yearOfRelease: 2023, color: 'White', engineCapacity: '5 tdi', weight: '1700kg', carType: "Crossover", price: '2000$/day', photoURL: 'images/cullinan.jpeg' },
        { id: 8, name: 'Skoda Superb', yearOfRelease: 2014, color: 'Gray', engineCapacity: '1.8 tdi', weight: '1500kg', carType: "Universal", price: '1300$/day', photoURL: 'images/Superb.jpeg' },
        { id: 9, name: 'Porsh Panamera', yearOfRelease: 2023, color: 'Blue', engineCapacity: '4.8 dci', weight: '1200kg', carType: "Fastback", price: '1900$/day', photoURL: 'images/Panamera.jpeg' },
        { id: 10, name: 'RenoArkana', yearOfRelease: 2020, color: 'Red', engineCapacity: '2.8 tdi', weight: '1400kg', carType: "Crossover", price: '1400$/day', photoURL: 'images/RenoArkana.jpeg' }
    ];
    $scope.hideform = true;

    $scope.editCar = function (id) {
        $scope.hideform = false;
        if (id == 'new') {
            $scope.edit = true;
            $scope.name = '';
            $scope.yearOfRelease = '';
            $scope.color = '';
            $scope.engineCapacity = '';
            $scope.weight = '';
            $scope.carType = '';
            $scope.price = '';
        } else {
            $scope.edit = false;
            $scope.index = id - 1;
            $scope.name = $scope.cars[$scope.index].name;
            $scope.yearOfRelease = $scope.cars[$scope.index].yearOfRelease;
            $scope.color = $scope.cars[$scope.index].color;
            $scope.engineCapacity = $scope.cars[$scope.index].engineCapacity;
            $scope.weight = $scope.cars[$scope.index].weight;
            $scope.carType = $scope.cars[$scope.index].carType;
            $scope.price = $scope.cars[$scope.index].price;
            $scope.photoURL = $scope.cars[$scope.index].photoURL;
        }
    };

    $scope.saveCar = function () {
        $scope.hideform = false;
        if ($scope.edit == true) {
            $scope.LENGTH = $scope.cars.length;
            $scope.cars.push({ id: $scope.LENGTH + 1, name: $scope.name, yearOfRelease: $scope.yearOfRelease, color: $scope.color, engineCapacity: $scope.engineCapacity, weight: $scope.weight, carType: $scope.carType, price: $scope.price, photoURL: $scope.photoURL });
            $scope.key = '';
            $scope.hideform = true;
        } else {
            $scope.cars[$scope.index].name = $scope.name;
            $scope.cars[$scope.index].yearOfRelease = $scope.yearOfRelease;
            $scope.cars[$scope.index].color = $scope.color;
            $scope.cars[$scope.index].engineCapacity = $scope.engineCapacity;
            $scope.cars[$scope.index].weight = $scope.weight;
            $scope.cars[$scope.index].carType = $scope.carType;
            $scope.cars[$scope.index].price = $scope.price;
            $scope.cars[$scope.index].photoURL = $scope.photoURL;
            $scope.key = '';
            $scope.hideform = true;
        }
    };

    $scope.uploadPhoto = function (element) {
        $scope.$apply(function ($scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                $scope.photoURL = e.target.result;
            };
            reader.readAsDataURL(photofile);
        });
    };

    $scope.cancel = function () {
        $scope.key = '';
        $scope.hideform = true;
    }

    $scope.isValidKey = function (value) {
        if (value && value.length >= 5) {
            $scope.error = false;
        }
        else {
            $scope.error = true;
        }
    };

    // $scope.$watch('passw1', function () {$scope.test();});
    // $scope.$watch('passw2', function () {$scope.test();});
    // $scope.$watch('name', function () {$scope.test();});
    // $scope.$watch('color', function () {$scope.test();});

    // $scope.test = function () {
    //     if ($scope.passw1 !== $scope.passw2) {
    //         $scope.error = true;
    //     } else {
    //         $scope.error = false;
    //     }

    //     $scope.incomplete = false;

    //     if (!$scope.name.length || !$scope.color.length ||
    //         !$scope.passw1.length || !$scope.passw2.length) {
    //         $scope.incomplete = true;
    //     }
    // };

    $scope.sortByColumn = function (columnName) {
        // Змінюємо напрямок сортування, якщо вибраний той самий стовпець
        if ($scope.sortBy === columnName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }

        // Встановлюємо стовпець для сортування
        $scope.sortBy = columnName;
    };

    $scope.orderBy = function (item) {
        // Виконуємо сортування за вибраним стовпцем та напрямом
        if ($scope.reverse) {
            return -item[$scope.sortBy];
        } else {
            return item[$scope.sortBy];
        }
    };

});


