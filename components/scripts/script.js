var a, append, author, b, d, dance, fill, fillOut, happy, i, info, j, k, key, l, len, len1, len2, len3, m, myFunction, myFunction2, myObj, name, names, ref, thing, value,
  slice = [].slice;

myObj = {
  name: "Ray",
  heroes: [
    {
      name: 'Cleve',
      age: 30
    }
  ]
};

$('#content').append("--" + myObj.heroes[0].name);

a = [1, 2, 3];

b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

d = [1, 2, 3, 4, 5, 6, 7, 8, 9];

names = ["cleve", "gomes", "freda"];

[].splice.apply(names, [1, 2].concat(ref = ['Bob', 'Pete'])), ref;

if (name === 'cleve') {
  name = 'cleve gomes';
}

if (name === 'cleve') {
  name = 'cleve gomes';
}

if (name !== 'cleve') {
  name = 'cleve gomes';
}

if (name === 'gomes') {
  name = 'cleve';
}

dance = function() {
  return alert('mambo');
};

happy = true;

if (happy === true) {
  dance();
}

name = 'Cleve';

$('#content').append;

if (name != null) {
  "" + name;
}

names = ["cleve", "cleve", "cleve", "cleve", "cleve"];

for (j = 0, len = names.length; j < len; j++) {
  thing = names[j];
  console.log(thing);
}

for (i = k = 0, len1 = names.length; k < len1; i = ++k) {
  thing = names[i];
  console.log(i + " " + thing);
}

for (i = l = 0, len2 = names.length; l < len2; i = ++l) {
  thing = names[i];
  console.log(thing + " " + i + "  ");
}

for (i = m = 0, len3 = names.length; m < len3; i = ++m) {
  thing = names[i];
  if (thing !== "cleve") {
    console.log(thing + " " + i);
  }
}

info = {
  name: 'Ray',
  title: "Jack",
  tuts: "fd fdf dfdfdf"
};

for (key in info) {
  value = info[key];
  console.log(key + ": " + value);
}

myFunction = function() {
  return console.log("Hello");
};

myFunction2 = function() {
  console.log('Hi');
  return console.log('Hi');
};

myFunction("dsdf");

myFunction2("dsdf");

info = ['Cleve', 'gomes', 'james', 'pepsi'];

fillOut = function() {
  var item, len4, links, n, name, results;
  name = arguments[0], links = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  $('#content').append(name + "<br>");
  results = [];
  for (n = 0, len4 = links.length; n < len4; n++) {
    item = links[n];
    results.push($('#content').append(item + "<br>"));
  }
  return results;
};

fillOut.apply(null, info);

append = function(item) {
  return $('#content').append("" + item);
};

author = 'Cleve';

switch (author) {
  case 'Ray':
    append('JavaScript');
    break;
  case 'Morten':
  case 'Cleve':
    append('Web Design');
    break;
  default:
    append('Training2');
}

fill = function(item) {
  if (item == null) {
    item = 'Bob';
  }
  $("#content").append("" + item);
  return console.log(this.fill);
};

fill;
