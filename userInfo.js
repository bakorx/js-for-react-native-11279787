function createUserProfiles(ghanaianNames, modifiedGhanaianNames) {
    let id = 1;
    return ghanaianNames.map((ghanaianName, index) => {
      return {
        originalGhanaianName: ghanaianName,
        modifiedGhanaianName: modifiedGhanaianNames[index],
        id: id++
      };
    });
  }
  
  const ghanaianNamesArray = ["Kwame", "Akosua", "Kwesi", "Akua", "Yaw"];
const userProfiles = createUserProfiles(ghanaianNamesArray, formattedStrings);
console.log(userProfiles);
