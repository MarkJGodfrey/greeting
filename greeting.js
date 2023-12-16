const greetings = ['Hi','Hello','Greetings',"What's up","'Sup",'Yo',"G'mornin'"];
const situations = ["Delightful","Lucky","Awful","Awkward","Unlucky","Crazy","Emotional","Funny","Hilarious","Humorous","Nice","Silly","Tough","Neat","Romantic","Unpredictable","Wild"];
const syh = ' seeing you here.';
const seems = ["Able","Absent-minded","Awkward","Clumsy","Dim","Fickle","Foolish","Lazy","Naughty","Pompous","Weak-willed","Carefree","Crazy","Cultured","Easygoing","Educated","Egotistical","Emotional","Experienced","Friendly","Funny","Honest","Humble","Intelligent","Nervous","Nice","Popular","Resourceful","Self-centered","Tough","Wise"];
const looks = ["attractive","youthful","bald","beautiful","blonde","chubby","curvy","fat","fit","flabby","gorgeous","handsome","large","muscular","obese","plump","ordinary","plain","presentable","scruffy","short","skinny","slender","smart","stocky","tall","thin","well-built"];
const greet =()=>{
    const greeting = greetings[Math.floor(Math.random()*greetings.length)];
    const situation = situations[Math.floor(Math.random()*situations.length)];
    const seemlook = Math.floor(Math.random()*2);
    if (seemlook===0){
        const seem = seems[Math.floor(Math.random()*seems.length)];
        console.log(greeting + ", " + situation + " seeing you here. You seem " + seem + ".")
    } else {
        const look = looks[Math.floor(Math.random()*looks.length)];
        console.log(greeting + ", " + situation + " seeing you here. You look " + look + ".")
    }
}
greet();