'use strict'

var cl = console.log;

var studentInfo = [
    {
        fname:'sapna',
        lname:'bhosikar',
        education:'B-tech',
        institute:'MPGI',
    },

    {
        fname:'pallavi',
        lname:'bhosikar',
        education:'B-tech',
        institute:'MIT',
    },

    {
        fname:'vaishnav',
        lname:'bhosikar',
        education:'BEE',
        institute:'MGM',
    },

    {
        fname:'gaurav',
        lname:'bhosikar',
        education:'BEE',
        institute:'MPGI'
    },
];

var infoStore = document.getElementById('info1');

var result = '';

for(var i = 0; i < studentInfo.length; i++){
    result += `<tr>`;
    result += `<td>${(i+1)}</td>`;
    result += `<td>${studentInfo[i].fname}</td>`;
    result += `<td>${studentInfo[i].lname}</td>`;
    result += `<td>${studentInfo[i].education}</td>`;
    result += `<td>${studentInfo[i].institute}</td>`;
    result += `</tr>`;
    
}

infoStore.innerHTML = result;


var studentInfo = [
    {
        fname:'rashmika',
        lname:'mandana',
        film:'geeta govindam',
        age:'27',
    },

    {
        fname:'sai',
        lname:'pallavi',
        film:'maari',
        age:'28',
    },

    {
        fname:'deepika',
        lname:'padukon',
        film:'pathan',
        age:'31',
    },

    {
        fname:'sonali',
        lname:'bendre',
        film:'hum sath sath hain',
        age:'38'
    },
];

var infoStore = document.getElementById('info2');

var result = '';

for(var i = 0; i < studentInfo.length; i++){
    result += `<tr>`;
    result += `<td>${(i+1)}</td>`;
    result += `<td>${studentInfo[i].fname}</td>`;
    result += `<td>${studentInfo[i].lname}</td>`;
    result += `<td>${studentInfo[i].film}</td>`;
    result += `<td>${studentInfo[i].age}</td>`;
    result += `</tr>`;
    
}

infoStore.innerHTML = result;


var studentInfo = [
    {
        fname:'vijay',
        lname:'deverkonda',
        movie:'dear comrade',
        age:'29',
    },

    {
        fname:'salman',
        lname:'khan',
        movie:'pathan',
        age:'55',
    },

    {
        fname:'shahid',
        lname:'kapoor',
        movie:'vivah',
        age:'38',
    },

    {
        fname:'varun',
        lname:'dhawan',
        movie:'street dancer-3',
        age:'32'
    },
];

var infoStore = document.getElementById('info3');

var result = '';

for(var i = 0; i < studentInfo.length; i++){
    result += `<tr>`;
    result += `<td>${(i+1)}</td>`;
    result += `<td>${studentInfo[i].fname}</td>`;
    result += `<td>${studentInfo[i].lname}</td>`;
    result += `<td>${studentInfo[i].movie}</td>`;
    result += `<td>${studentInfo[i].age}</td>`;
    result += `</tr>`;
    
}

infoStore.innerHTML = result;


var studentInfo = [
    {
        fname:'virat',
        lname:'kohli',
        nickname:'viru',
        age:'37',
    },

    {
        fname:'ms',
        lname:'dhoni',
        nickname:'ms',
        age:'40',
    },

    {
        fname:'hardik',
        lname:'pandya',
        nickname:'harry',
        age:'28',
    },

    {
        fname:'rohit',
        lname:'sharama',
        nickname:'rohh',
        age:'39'
    },
];

var infoStore = document.getElementById('info4');

var result = '';

for(var i = 0; i < studentInfo.length; i++){
    result += `<tr>`;
    result += `<td>${(i+1)}</td>`;
    result += `<td>${studentInfo[i].fname}</td>`;
    result += `<td>${studentInfo[i].lname}</td>`;
    result += `<td>${studentInfo[i].nickname}</td>`;
    result += `<td>${studentInfo[i].age}</td>`;
    result += `</tr>`;
    
}

infoStore.innerHTML = result;