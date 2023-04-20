function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else {
		return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);;
	}

}


function getUsersNamesInAgeRange(users, gender) {

	let filtered = users.filter(user => user.gender === gender);
	if (filtered.length === 0) {
		return 0;
	}
	let totalAge = filtered.map(user => user.age).reduce((sum, age) => sum + age);
	return ((totalAge / filtered.length));

}