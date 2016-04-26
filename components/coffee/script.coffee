#mylist = ['ray',3,true]
#do addStuff = ->
#  a =1
#  $('#content').append("james here")
myObj =
  name : "Ray"
  heroes : [
    {
      name : 'Cleve'
      age : 30
    } 
  ]

$('#content').append  "--#{myObj.heroes[0].name}"

a= [1,2,3]
b= [1..10]
d= [1...10]
names = ["cleve"
"gomes"
"freda"
]


names[1..2] = ['Bob','Pete']

if name == 'cleve' 
then  name = 'cleve gomes'

if name is 'cleve' 
then  name = 'cleve gomes'

if name isnt 'cleve'
then  name = 'cleve gomes'

name = 'cleve' if name is 'gomes'

dance = ->
  alert('mambo')

happy = true
dance() if happy is true


name = 'Cleve'
$('#content').append
"#{name}" if name?


names = [
  "cleve"
  "cleve"
  "cleve"
  "cleve"
  "cleve"
]





for thing in names
  console.log thing


for thing,i in names
  console.log "#{i} #{thing}"



console.log "#{thing} #{i}  " for thing, i in names

console.log "#{thing} #{i}" for thing, i in names when thing isnt "cleve"


info =
  name: 'Ray'
  title: "Jack"
  tuts: "fd fdf dfdfdf"


for key, value of info
    console.log "#{key}: #{value}"


myFunction = -> console.
log("Hello")

myFunction2 = ->
  console.log('Hi')
  console.log('Hi')


myFunction "dsdf"

myFunction2 "dsdf"



info = [
  'Cleve'
  'gomes'
  'james'
  'pepsi'
]

fillOut = (name,links...) ->
  $('#content').append "#{name}<br>"
  for item in links
    $('#content').append "#{item}<br>"


fillOut info...

append = (item) ->
  $('#content').append "#{item}"
  
author = 'Cleve'

switch author
  when 'Ray' then append 'JavaScript'
  when 'Morten','Cleve' then append 'Web Design'
  else append 'Training2'

    
fill = (item = 'Bob') ->
  $("#content").append "#{item}"
  console.log @fill
  
fill
    


