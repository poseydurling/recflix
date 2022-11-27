import { SetStateAction, useEffect, useState } from "react";

var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

export function autocompleteMatch(input: string | RegExp) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(val: string | RegExp) {
  const res = document.getElementById("result");
  if(res === null) {
    console.log("Couldn't find input element")
  } else if(!(res instanceof HTMLInputElement)) { 
    console.log(`Found element ${res}, but it wasn't an input`)
  } else {
    res.innerHTML = '';
    let list = '';
    let terms = autocompleteMatch(val);
    for (let i=0; i<terms.length; i++) {
      list += '<li>' + terms[i] + '</li>';
    }
    res.innerHTML = '<ul>' + list + '</ul>';
  }
}