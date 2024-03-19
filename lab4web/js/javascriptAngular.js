angular.module('myApp', []).controller('CarController', function ($scope) {

    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.cars = [
        { id: 1, name: 'Skoda Octavia', yearOfRelease: 2018, color: 'White', engineCapacity: '1.9 tdi', weight: '1250kg', carType: "Sedan", price: '800$/day', photoURL: 'images/SkodaOctavia.jpeg' },
        { id: 2, name: 'Audi A4', yearOfRelease: 2020, color: 'Gray', engineCapacity: '2.2 tdi', weight: '1200kg', carType: "Universal", price: '1100$/day', photoURL: 'images/AudiA4.jpeg' },
        { id: 3, name: 'BMW M5', yearOfRelease: 2022, color: 'Black-green', engineCapacity: '2.5 tdi', weight: '1480kg', carType: "Sedan", price: '1500$/day', photoURL: 'images/BMWM5.jpeg' },
        { id: 4, name: 'Audi Q7', yearOfRelease: 2019, color: 'White', engineCapacity: '3.5 tdi', weight: '1500kg', carType: "Crossover", price: '1100$/day', photoURL: 'images/AudiQ7.jpeg' },
        { id: 5, name: 'Volkswagen Golf 7', yearOfRelease: 2017, color: 'Black', engineCapacity: '1.9 tdi', weight: '1000kg', carType: "Universal", price: '700$/day', photoURL: 'images/Golf.jpeg' },
        { id: 6, name: 'BMW X5', yearOfRelease: 2023, color: 'Blue', engineCapacity: '3.3 tdi', weight: '1300kg', carType: "Crossover", price: '1200$/day', photoURL: 'images/BMWX5.jpeg' },
        { id: 7, name: 'Rolls-Royce Cullinan', yearOfRelease: 2023, color: 'White', engineCapacity: '5 tdi', weight: '1700kg', carType: "Crossover", price: '2000$/day', photoURL: 'images/cullinan.jpeg' },
        { id: 8, name: 'Skoda Superb', yearOfRelease: 2014, color: 'Gray', engineCapacity: '1.8 tdi', weight: '1500kg', carType: "Universal", price: '1300$/day', photoURL: 'images/Superb.jpeg' },
        { id: 9, name: 'Porsh Panamera', yearOfRelease: 2023, color: 'Blue', engineCapacity: '4.8 dci', weight: '1200kg', carType: "Fastback", price: '1900$/day', photoURL: 'images/Panamera.jpeg' },
        { id: 10, name: 'Reno Arkana', yearOfRelease: 2020, color: 'Red', engineCapacity: '2.8 tdi', weight: '1400kg', carType: "Crossover", price: '1400$/day', photoURL: 'images/RenoArkana.jpeg' }
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

    $scope.sortByColumn = function (columnName) { 
        if ($scope.sortBy === columnName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.reverse = false;
        }

        $scope.sortBy = columnName;
    };

    $scope.orderBy = function (item) {
        if ($scope.reverse) {
            return -item[$scope.sortBy];
        } else {
            return item[$scope.sortBy];
        }
    };

    $scope.showNameTooltip = false;
    $scope.showYearOfReleaseTooltip = false;
    $scope.showColorTooltip = false;
    $scope.showEngineCapacityTooltip = false;
    $scope.showWeightTooltip = false;
    $scope.showCarTypeTooltip = false;
    $scope.showPriceTooltip = false;

    $scope.showTooltip = function(fieldName) {
        switch (fieldName) {
            case 'name':
                $scope.showNameTooltip = $scope.name === '';
                break;
            case 'color':
                $scope.showColorTooltip = $scope.color === '';
                break;
            case 'carType':
                $scope.showCarTypeTooltip = $scope.carType === '';
                break;
        }
        $scope.showYearOfReleaseTooltip = $scope.yearOfRelease === null || $scope.yearOfRelease === undefined;
        $scope.showEngineCapacityTooltip = $scope.engineCapacity === null || $scope.engineCapacity === undefined;
        $scope.showWeightTooltip = $scope.weight === null || $scope.weight === undefined;
        $scope.showPriceTooltip = $scope.price === null || $scope.price === undefined;
    };


    $scope.hideTooltip = function(fieldName) {
        switch (fieldName) {
            case 'name':
                $scope.showNameTooltip = false;
                break;
            case 'color':
                $scope.showColorTooltip = false;
                break;
            case 'carType':
                $scope.showCarTypeTooltip = false;
                break;
        }
        $scope.showYearOfReleaseTooltip = $scope.yearOfRelease === null || $scope.yearOfRelease === undefined;
        $scope.showEngineCapacityTooltip = $scope.engineCapacity === null || $scope.engineCapacity === undefined;
        $scope.showWeightTooltip = $scope.weight === null || $scope.weight === undefined;
        $scope.showPriceTooltip = $scope.price === null || $scope.price === undefined;
    }


});

angular.module('MyApp', []).controller('CarRentController', function ($scope) {
    $scope.cars = [
        { 
            id: 1, 
            name: 'Skoda', 
            models: [
                { id: 1, name: 'Octavia', yearOfRelease: 2018, color: 'White', engineCapacity: '1.9 tdi', weight: '1250kg', carType: "Sedan", price: '800$/day', photoURL: 'images/SkodaOctavia.jpeg' },
                { id: 2, name: 'Superb', yearOfRelease: 2020, color: 'Black', engineCapacity: '2.0 tdi', weight: '1350kg', carType: "Universal", price: '1000$/day', photoURL: 'images/SkodaSuperb.jpeg' },
                { id: 3, name: 'Fabia', yearOfRelease: 2019, color: 'Red', engineCapacity: '1.4 tdi', weight: '1100kg', carType: "Hatchback", price: '700$/day', photoURL: 'images/SkodaFabia.jpeg' }
            ]
        },
        { 
            id: 2, 
            name: 'Audi', 
            models: [
                { id: 1, name: 'A4', yearOfRelease: 2020, color: 'Gray', engineCapacity: '2.2 tdi', weight: '1200kg', carType: "Universal",price: '1100$/day', photoURL: 'images/AudiA4.jpeg' },
                { id: 2, name: 'Q5', yearOfRelease: 2019, color: 'Blue', engineCapacity: '2.0 tdi', weight: '1400kg', carType: "Crossover",price: '1200$/day', photoURL: 'images/AudiQ5.jpeg' },
                { id: 3, name: 'A6', yearOfRelease: 2021, color: 'Silver', engineCapacity: '2.5 tdi', weight: '1300kg', carType: "Sedan",price: '1300$/day', photoURL: 'images/AudiA6.jpeg' }
            ]
        },
        { 
            id: 3, 
            name: 'BMW', 
            models: [
                { id: 1, name: '3 Series', yearOfRelease: 2019, color: 'Black', engineCapacity: '2.0 tdi', weight: '1400kg', carType: "Sedan",price: '1200$/day', photoURL: 'images/BMW3Series.jpeg' },
                { id: 2, name: 'X3', yearOfRelease: 2020, color: 'White', engineCapacity: '2.0 tdi', weight: '1500kg', carType: "Crossover",price: '1300$/day', photoURL: 'images/BMWX3.jpeg' },
                { id: 3, name: '5 Series', yearOfRelease: 2022, color: 'Gray', engineCapacity: '3.0 tdi', weight: '1600kg', carType: "Sedan",price: '1500$/day', photoURL: 'images/BMW5Series.jpeg' }
            ]
        }
    ];


    $scope.selectedCar = null; // Ініціалізація обраного автомобіля

    $scope.selectCar = function(car) {
        $scope.selectedCar = car;
    };


    $scope.costOptions = [
    { name: 'Євро', value: 'Euro' },
    { name: 'Гривня', value: 'Hrivnia' },
    { name: 'Долар', value: 'Dollar' },
    { name: 'Юані', value: 'Yuani' }
    ];

    $scope.costCurrency = 'Dollar'; 
    
      $scope.additionalFeatures = {
        PidigrSidinia: { checked: false, description: 'Підігрів сидіння' },
        TwoSezonClimatronik: { checked: false, description: 'Двухзонний кліматронік' },
        Luk: { checked: false, description: 'Люк' },
        SalonAlCantara: { checked: false, description: 'Салон Аль-Кантара' },
        Electropaket: { checked: false, description: 'Електропакет' }
      };

      $scope.clearOrder = function(){
        $scope.selectedCompany = '';
        $scope.selectedModel = '';
        $scope.additionalFeatures = {
            PidigrSidinia: { checked: false, description: 'Підігрів сидіння' },
            TwoSezonClimatronik: { checked: false, description: 'Двухзонний кліматронік' },
            Luk: { checked: false, description: 'Люк' },
            SalonAlCantara: { checked: false, description: 'Салон Аль-Кантара' },
            Electropaket: { checked: false, description: 'Електропакет' }
          };
          $scope.costMoney = '';
          $scope.email = '';
      }

      $scope.createOrder = function() {
        // Перевірка наявності обраної компанії
        if (!$scope.selectedCompany) {
            alert('Будь ласка, виберіть компанію.');
            return;
        }
    
        // Перевірка наявності обраної моделі
        if (!$scope.selectedModel) {
            alert('Будь ласка, виберіть модель.');
            return;
        }
    
        // Перевірка наявності обраного типу приводу
        if (!$scope.selectedCar.drive) {
            alert('Будь ласка, виберіть тип приводу.');
            return;
        }
    
        // Перевірка наявності введеної суми та перевірка на цифри
        if (!$scope.costMoney) {
            alert('Будь ласка, введіть суму.');
            return;
        } else if (!/^\d+$/.test($scope.costMoney)) {
            alert('Сума повинна містити лише цифри.');
            return;
        }

    
        // Перевірка наявності введеної електронної адреси
        if (!$scope.email) {
            alert('Будь ласка, введіть електронну адресу.');
            return;
        }
    
        // Перенаправлення на головну сторінку
        window.location.href = 'index.html';
    
        // Показ алерта
        alert('Замовлення пройшло успішно!');
    };
    
    $scope.selectedCar = {
        drive: 'front' // або value за замовчуванням для переднього приводу
    };

    $scope.appVisible = true; // Початково додаток видимий

    $scope.toggleAppVisibility = function() {
        $scope.appVisible = !$scope.appVisible;
    };
    
});

