// TODO: fetch from API

const LYRICS_BSB = `
Yeah
You are my fire
The one desire
Believe when I say
I want it that way
But we are two worlds apart
Can't reach to your heart
When you say
That I want it that way
Tell me why
Ain't nothin' but a heartache
Tell me why
Ain't nothin' but a mistake
Tell me why
I never wanna hear you say
I want it that way
Am I your fire?
Your one desire
Yes, I know it's too late
But I want it that way
Tell me why
Ain't nothin' but a heartache
Tell me why
Ain't nothin' but a mistake
Tell me why
I never wanna hear you say
I want it that way
Now I can see that we've fallen apart
From the way that it used to be, yeah
No matter the distance
I want you to know
That deep down inside of me
You are my fire
The one desire
You are (you are, you are, you are)
Don't wanna hear you say
Ain't nothin' but a heartache
Ain't nothin' but a mistake (don't wanna hear you say)
I never wanna hear you say (oh, yeah)
I want it that way
Tell me why
Ain't nothin' but a heartache
Tell me why
Ain't nothing but a mistake
Tell me why
I never want to hear you say (never wanna hear you say)
I want it that way
Tell me why
Ain't nothin' but a heartache
Ain't nothin' but a mistake
Tell me why
I never want to hear you say (don't want to hear you say)
I want it that way
'Cause I want it that way
`;
const LYRICS_FROZEN = `
The snow glows white on the mountain tonight
Not a footprint to be seen
A kingdom of isolation
And it looks like I'm the queen
The wind is howling like this swirling storm inside
Couldn't keep it in, heaven knows I've tried
Don't let them in, don't let them see
Be the good girl you always have to be
Conceal, don't feel, don't let them know
Well, now they know
Let it go, let it go
Can't hold it back anymore
Let it go, let it go
Turn away and slam the door
I don't care what they're going to say
Let the storm rage on
The cold never bothered me anyway
It's funny how some distance makes everything seem small
And the fears that once controlled me can't get to me at all
It's time to see what I can do
To test the limits and break through
No right, no wrong, no rules for me
I'm free
Let it go, let it go
I am one with the wind and sky
Let it go, let it go
You'll never see me cry
Here I stand and here I stay
Let the storm rage on
My power flurries through the air into the ground
My soul is spiraling in frozen fractals all around
And one thought crystallizes like an icy blast
I'm never going back, the past is in the past
Let it go, let it go
When I'll rise like the break of dawn
Let it go, let it go
That perfect girl is gone
Here I stand in the light of day
Let the storm rage on
The cold never bothered me anyway
`;
const LYRICS_BLINK = `
I never thought I'd die alone
I laughed the loudest, who'd have known?
I trace the cord back to the wall
No wonder it was never plugged in at all
I took my time, I hurried up
The choice was mine, I didn't think enough
I'm too depressed to go on
You'll be sorry when I'm gone
I never conquered, rarely came
Sixteen just held such better days
Days when I still felt alive
We couldn't wait to get outside
The world was wide, too late to try
The tour was over, we'd survived
I couldn't wait 'til I got home
To pass the time in my room alone
I never thought I'd die alone
Another six months I'll be unknown
Give all my things to all my friends
You'll never step foot in my room again
You'll close it off, board it up
Remember the time that I spilled the cup
Of apple juice in the hall
Please tell mom this is not her fault
I never conquered, rarely came
Sixteen just held such better days
Days when I still felt alive
We couldn't wait to get outside
The world was wide, too late to try
The tour was over, we'd survived
I couldn't wait till I got home
To pass the time in my room alone
I never conquered, rarely came
Tomorrow holds such better days
Days when I can still feel alive
When I can't wait to get outside
The world is wide, the time goes by
The tour is over, I've survived
I can't wait 'til I get home
To pass the time in my room alone
`;

const LYRICS_BSB_2 = `
I don't know what he does to make you cry
But I'll be there to make you smile
I don't have a fancy car
To get to you, I'd walk a thousand miles
I don't care if he buys you nice things
Does his gifts come from the heart?
I don't know, but if you were my girl
I'd make it so we'd never be apart
But my love is all I have to give
Without you I don't think I can live
I wish I could give the world to you
But love is all I have to give
When you talk, does it seem like he's not
Even listening to a word you say?
That's okay, baby, just tell me your problems
I'll try my best to kiss them all away
Does he leave when you need him the most?
Does his friends get all your time?
Baby please, I'm on my knees
Praying for the day that you'll be mine
But my love is all I have to give
Without you I don't think I can live
I wish I could give the world to you
But love is all I have to give
Oh, to you
Hey girl (Hey girl)
I don't want you to cry no more inside
Ohh, all the money in the world
Could never add up to all the love
I have inside... I love you, baby
And I will give it to you
All I can give, all I can give
Everything I have is for you, you, you
You got what I need, you got what I need
My lovin', all that I have to give
All that I have is for you
My love is all...
I have to give
Without you I don't think I can live (I don't think that I can live)
I wish I could give the world to you (I wanna give the world to you)
But love is all I have to give (It's all that I have)
But my love is all I have to give
Without you I don't think I can live
I wish I could give the world to you
But love is all I have to give
To you
Ohh...
All I have to give
Without you I don't think I can live
Give the world to you, lady
But love is all I have to give (That's all I got to give)
But my love is all I have to give
Without you I don't think I can live (I don't think that I can live)
I wish I could give the world to you
But love is all I have to give
`;
const LYRICS_LITTLE_MERMAID = `
Maybe he's right
Maybe there is something the matter with me
I just don't see how a world that makes such wonderful things could be bad
Look at this stuff
Isn't it neat?
Wouldn't you think my collection's complete?
Wouldn't you think I'm the girl
The girl who has everything?
Look at this trove
Treasures untold
How many wonders can one cavern hold?
Looking around here you'd think
Sure, she's got everything
I've got gadgets and gizmos a-plenty
I've got whozits and whatzits galore
You want thingamabobs?
I've got twenty!
But who cares?
No big deal
I want more
I wanna be where the people are
I wanna see, wanna see 'em dancin'
Walking around on those, what do you call 'em?
Oh, feet
Flippin' your fins, you don't get too far
Legs are required for jumping, dancing
Strolling along down the, what's that word again?
Street
Up where they walk, up where they run
Up where they stay all day in the sun
Wanderin' free, wish I could be
Part of that world
What would I give if I could live out of these waters?
What would I pay to spend a day warm on the sand?
Bet'cha on land they understand
Bet they don't reprimand their daughters
Bright young women, sick of swimmin'
Ready to stand
And ready to know what the people know
Ask 'em my questions and get some answers
What's a fire and why does it, what's the word?
Burn?
When's it my turn?
Wouldn't I love, love to explore that shore up above?
Out of the sea
Wish I could be
Part of that world
`;
const LYRICS_BLINK_2 = `
All the small things
True care, truth brings
I'll take one lift
Your ride, best trip
Always I know
You'll be at my show
Watching, waiting
Commiserating
Say it ain't so
I will not go
Turn the lights off
Carry me home
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Late night come home
Work sucks, I know
She left me roses by the stairs
Surprises let me know she cares
Say it ain't so
I will not go
Turn the lights off
Carry me home
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Na-na, na-na, na-na, na-na, na-na
Say it ain't so
I will not go
Turn the lights off
Carry me home
Keep your lips still
I'll be your thrill
The night will go on
My little windmill
Say it ain't so
(Na-na, na-na) I will not go
(Na-na, na-na, na-na) Turn the lights off
(Na-na, na-na) Carry me home
Keep your lips still
(Na-na, na-na) I'll be your thrill
(Na-na, na-na, na-na) The night will go on, the night will go on
(Na-na, na-na) My little windmill
`;

const SONGS_LIST_1 = [
  { title: 'I want it That Way', artist: 'Backstreet Boys', lyrics: LYRICS_BSB },
  { title: 'Let It Go', artist: 'Idina Menzel', lyrics: LYRICS_FROZEN },
  { title: 'Adam’s Song', artist: 'Blink 182', lyrics: LYRICS_BLINK },
];
const SONGS_LIST_2 = [
  { title: 'All I Have To Give', artist: 'Backstreet Boys', lyrics: LYRICS_BSB_2 },
  { title: 'Part of Your World', artist: 'Jodi Benson', lyrics: LYRICS_LITTLE_MERMAID },
  { title: 'All The Small Things', artist: 'Blink 182', lyrics: LYRICS_BLINK_2 },
];