function bestFriend(arr) {
    let name = arr[0];
    for (let i = 0; i < arr.length; i ++) {
        // console.log('Name: '+ arr[i] + ', Length: '+ arr[i].length);
        if (name.length < arr[i].length) {
            name = arr[i];
        }
    }
    // console.log(typeof name);
    return name;
}
var arr = ['Tanvir Opu', 'Mizan Babor', 'Salah Uddin', 'Tonmoy Kanti', 'Asad Kibria'];
var result = bestFriend(arr);
console.log('Best friend: ' + result);