(function(){

  var app = angular.module('store', []);

  app.controller('StoreController', function(){
        this.products = gems;
  });

  var gems = [
    {
        name: 'Dodecahedron',
        price: 2.95,
        description: '. . .',
        canShow: false,
        soldOut: false,
        image:  [
                  'image/gem-01.gif',
                ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: '. . .',
        canShow: true,
        soldOut: false,
        image:    [
                    'image/gem-02.gif',
                  ]
    }
  ]
})();
