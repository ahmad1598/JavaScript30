 const inventors = [
     {first:'Albert', last:'Einstein',year:1879, passed: 1955},
     {first:'Isaac', last:'Newton',year:1643, passed: 1727},
     {first:'Galileo', last:'Galilei',year:1564, passed: 1642},
     {first:'Marie', last:'Curie',year:1867, passed: 1934},
     {first:'Johannes', last:'Kepler',year:1571, passed: 1630},
     {first:'Nicolaus', last:'Copernicus',year:1473, passed: 1543},
     {first:'Max', last:'Planck',year:1858, passed: 1947}
 ]

 const people = 
    [
        'Beck, Glenn' ,'Becker, Carl' , 'Beckett, Samuel','Beddoes, Mick',
        'Beecher, Henry' , 'Beethoven, Ludwig', 'Begin, Menachem','Belloc, Hilaire',
        'Bellow, Saul','Benchley, Robert','Benenson, Peter','Ben-Gurion, David',' Benjamin, Walter',
        'Benn, Tony','Bennington, Chester','Benson, Leana','Bent, Silas','Bentsen, Lloyd','Berger, Ric',
        'Bergman, Ingmar','Berio, Luciano','Berle, Milton','Berlin, Irving','Berne, Eric','Bergman, Ingmar',
        'Berio, Luciano','Berle, Milton','Berlin, Irving','Berne, Eric','Berngard, Sandra','Berra, Yogi',
        'Berry, Halle','Berry, Wendell','Bethea, Erin','Bevan, Aneurin','Bevel, ken',
        'Biden, Joseph','Bierce, Ambrose','Biko,Steve','Billings, Josh','Biondo,Frank','Birrell, Augustine',
        'Black Elk','Blair, Robert','Blair, Tony','Blake, William'];



//Array.prototype.filter()
// 1. filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599))
console.table(fifteen)

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const fullNames = inventors.map(inventor => `First Name: ${inventor.first} Last Name: ${inventor.last}`)
console.table(fullNames)

//Array.prototype.sort()
// 3. Sort the inventors by birthday, oldest to youngest
const sortByBirth = inventors.sort((a,b) => a.year - b.year)
console.table(sortByBirth)

//Array.prototype.reduce()
// 4. How many years did all the inventors live?
 const totalYears = inventors.reduce((total,inventor) => total + (inventor.passed - inventor.year) ,0)
 console.log(totalYears)

 //5. Sort the inventors by years lived
 const oldest = inventors.sort((a,b) => (b.passed - b.year) - (a.passed - a.year))
 console.table(oldest)

 // 6. create a list of Boulevards in paris that contains 'de' anywhere in the name
 //https://en.wikipedia.org/wiki/Category:Boulevards_in_paris
 const category = document.querySelectorAll('.mw-category')
 const links = [...category.querySelectorAll('a')]
 const de = links   
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'))

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort( (a,b) => {
    const [aLast, aFirst] = a.split(', ')
    const [bLast, bFirst] = b.split(', ')
    return aLast > bLast ? 1 : -1
})
console.table(alpha)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk',
            'car','van','car','truck'];

const transportation = data.reduce((obj,item) => {
    if(!obj[item]){
        obj[item] = 0
     }
     obj[item]++
     return obj
},{})

console.log(transportation)