describe('phoneList', function(){

  beforeEach(module('phoneList'));

  describe('PhoneListController', function(){
    var $httpBackend, ctrl;
    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
      .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
      ctrl = $componentController('phoneList');
    }))

    
    it('should create a `phones` model with 3 phones', inject(function($componentController){
      expect(ctrl.phones).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.phones.length).toBe(2);
    }))
  })
})