(function(){
    "use strict";
    angular.module('address',[])
        .controller('addressCtrl',addressBook);

    addressBook.$inject=['$http'];

    function addressBook($http)
    {
        var vm=this;
        //vm.Title="Address Book";
        vm.AddressBookInfo=[];
        vm.GetAddress=getAddress;
        vm.addAddress=addAddress;
        vm.editAddress=editAddress;
        vm.deleteAddress=deleteAddress;
        vm.updateAddress=updateAddress;

        getAddress();

        function addAddress()
        {
            $http.post('/getAddress',vm.address).then(
                function(res){
                    console.log(res);
                },
                function(err)
                {
                    console.log(err);
                }
            );

        }
        function editAddress()
        {
            console.log('editAddress');
        }
        function deleteAddress(id)
        {
            console.log(id);
        }
        function updateAddress()
        {
            console.log('updateAddress');
        }

        function getAddress(){
            $http.get('/getAddress').then(
                function(res) {
                    vm.AddressBookInfo=res.data;
                },
                function(err){
                    console.log(err);
                }
            )
        }

    }
})();