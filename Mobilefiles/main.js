'use strict'

let sendBtn = function(u,i,o,j,k,l,w,a,s,d,e,c,z,q){

    $.ajax({
        url: "btn",
        type: 'post',
        dataType: 'json',
        data: JSON.stringify({
            u: h1,
            i: h2,
            o: l1,
            j: l2,
			k: k,
			l: l,
			w: w,
			a: a,
			s: s,
			d: d,
			e: e,
			c: c,
			z: z,
			q: q
        })
    })
};

let w=0,a=0,s=0,d=0,e=0,c=0,z=0,q=0;
let h1=0,l1=0,h2=0,l2=0,l=0,k=0, needupdt=0;



$('#u').on('mousedown',function(){
    h1=1;
    needupdt=1;
});
$('#u').on('mouseup mouseout',function(){
    h1=0;
    needupdt=1;
});
$('#i').on('mousedown',function(){
    h2=1;
    needupdt=1;
});
$('#i').on('mouseup mouseout',function(){
    h2=0;
    needupdt=1;
});
$('#o').on('mousedown',function(){
    l1=1;
    needupdt=1;
});
$('#o').on('mouseup mouseout',function(){
    l1=0;
    needupdt=1;
});
$('#j').on('mousedown',function(){
    l2=1;
    needupdt=1;
});
$('#j').on('mouseup mouseout',function(){
    l2=0;
    needupdt=1;
});
$('#k').on('mousedown',function(){
    k=1;
    needupdt=1;
});
$('#k').on('mouseup mouseout',function(){
    k=0;
    needupdt=1;
});
$('#l').on('mousedown',function(){
    l=1;
    needupdt=1;
});
$('#l').on('mouseup mouseout',function(){
    l=0;
    needupdt=1;
});




$("#w").on('mousedown', function(){
	w=1;
	needupdt=1;
});
$("#w").on('mouseup mouseout',function(){
	w=0;
	needupdt=1;
});
$("#a").on('mousedown', function(){
	a=1;
	needupdt=1;
});
$("#a").on('mouseup mouseout', function(){
	a=0;
	needupdt=1;
});
$("#s").on('mouseup mouseout', function(){
	s=1;
	needupdt=1;
});
$("#s").on('mouseup mouseout',function(){
	s=0;
	needupdt=1;
});
$("#d").on('mousedown', function(){
	d=1;
	needupdt=1;
});
$("#d").on('mouseup mouseout',function(){
	d=0;
	needupdt=1;
});
$("#q").on('mousedown', function(){
	q=1;
	needupdt=1;
});
$("#q").on('mouseup mouseout',function(){
	q=0;
	needupdt=1;
});
$("#e").on('mousedown', function(){
	e=1;
	needupdt=1;
});
$("#e").on('mouseup mouseout', function(){
	e=0;
	needupdt=1;
});
$("#c").on('mouseup mouseout',function(){
	e=0;
	needupdt=1;
});
$("#c").on('mousedown', function(){
	c=1;
	needupdt=1;
});
$("#c").on('mouseup mouseout',function(){
	c=0;
	needupdt=1;
});
$("#z").on('mousedown', function(){
	z=1;
	needupdt=1;
});
$("#z").on('mouseup mouseout',function(){
	z=0;
	needupdt=1;
});


setInterval(function ()
{
    if(needupdt===1)
    {
        needupdt=0;
        sendBtn(u,i,o,j,k,l,w,a,s,d,e,c,z,q);
    }
},60);



