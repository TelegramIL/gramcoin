import React, { Component } from 'react';


const groups = 
[
 { id: 'buy',   content: <button><img src="./img/buy.png" alt="my image" onClick={() => console.log('CLICKED')} />оол</button> },
 { id: 'study', content: 'Education'},
 { id: 'business', content: 'Business' }
]

export function GetGroups()
{
 return groups;
}
