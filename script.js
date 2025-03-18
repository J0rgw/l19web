TweenLite.set('#w2',{opacity:0})

var tl = new TimelineMax({delay:.5,repeat:-1})
tl.fromTo('#w1', 3,{x:0,y:0},{bezier:[{x:12, y:-12},{x:300, y:-55},{x:480, y:0}],ease:Linear.easeInOut})
.set('#w1',{opacity:0})
.set('#w2',{opacity:1})
.fromTo('#w2', 3,{x:0,y:0},{bezier:[{x:-10, y:15},{x:-360, y:40},{x:-480, y:0}],ease:Linear.easeInOut})