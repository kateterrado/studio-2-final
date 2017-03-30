const trumpWords = [
  {
    word: "All our yesterdays ",
    context: "a time for such a word.<br>To-morrow, and to-morrow, and to-morrow,<br>Creeps in this petty pace from day to day<br>To the last syllable of recorded time,<br>And all our yesterdays have lighted fools<br>The way to dusty death. Out, out, brief candle!<br>Life's but a walking shadow, a poor player<br>That struts and frets",
    tweet: "@johnd1263: Tonight's #metvstartrek episode is All Our Yesterdays, with special guest star, Mariette Hartley's midriff. #svengoolie"
  },
  {
    word: "All that glitters is not gold ",
    context: "he golden casket<br><br>MOROCCO<br>O hell! what have we here?<br>A carrion Death, within whose empty eye<br>There is a written scroll! I'll read the writing.<br>Reads<br><br>All that glitters is not gold;<br>Often have you heard that told:<br>Many a man his life hath sold<br>But my outside to behold:<br>Gilded tombs do worms enfold.<br>H",
    tweet:"@StheeReloaded: People before you get in a relationship with Vs when you're in a relationship **All that glitters is not gold**"
    
  },
  {
    word: "All's well that ends well ",
    context: "<br>All's Well That Ends Well<br>ACT I<br><br>SCENE I. Rousillon. The COUNT's palace.<br><br>Enter BERTRAM, the COUNTESS of Rousillon, HELENA, and LAFEU, all in black<br>CO",
    tweet: "RT @McLisseWorldPH: At least, all's well that ends well between McCoy and Yong. 😊 #PBBMissionImpasaball"
  },
  {
    word: "As good luck would have it ",
    context: "s love.<br>FORD<br>What, while you were there?<br>FALSTAFF<br>While I was there.<br>FORD<br>And did he search for you, and could not find you?<br>FALSTAFF<br>You shall hear. As good luck would have it, comes<br>in one Mistress Page; gives intelligence of Ford's<br>approach; and, in her invention and Ford's wife's<br>distraction, th",
    tweet: "@lincslibraries: As good luck would have it, today is the day of our Shakespeare craft event from 10am at #LincolnLibrary! More fool you if you miss it!"
  },
  {
    word: "As merry as the day is long ",
    context: "e's no place for you maids:' so deliver<br>I up my apes, and away to Saint Peter for the<br>heavens; he shows me where the bachelors sit, and<br>there live we as merry as the day is long.<br>ANTONIO<br>[To HERO] Well, niece, I trust you will be ruled<br>by your father.<br>BEATRICE<br>Yes, faith; it is my cousin's duty to m",
    tweet: "@StanTheJohn: As merry as the day is long, I was right and you were wrong 🤔🤔"
  },
  {
    word: "Bated breath ",
    context: "ay to you? Should I not say<br>'Hath a dog money? is it possible<br>A cur can lend three thousand ducats?' Or<br>Shall I bend low and in a bondman's key,<br>With bated breath and whispering humbleness, Say this;<br>'Fair sir, you spit on me on Wednesday last;<br>You spurn'd me such a day; another time<br>You call'd me d",
    tweet: "RT: @missingtimelord @BillKristol Yet you wait for every tweet with bated breath so you can comment, in a doomed effort to become relevant again.  Sad..."
  },
  {
    word: "Bag and baggage ",
    context: "How now! back, friends! Shepherd, go off a little.<br>Go with him, sirrah.<br>TOUCHSTONE<br>Come, shepherd, let us make an honourable retreat;<br>though not with bag and baggage, yet with scrip and scrippage.<br>Exeunt CORIN and TOUCHSTONE<br><br>CELIA<br>Didst thou hear these verses?<br>ROSALIND<br>O, yes, I heard them all, and",
    tweet: "@Leftywordsmith: I came to Lahore with bag and baggage. Going back home with bag & baggage, memories and more. Goodbye, city of love and liveliness."
  },
  {
    word: "Bear a charmed life ",
    context: "H<br>Thou losest labour:<br>As easy mayst thou the intrenchant air<br>With thy keen sword impress as make me bleed:<br>Let fall thy blade on vulnerable crests;<br>I bear a charmed life, which must not yield,<br>To one of woman born.<br>MACDUFF<br>Despair thy charm;<br>And let the angel whom thou still hast served<br>Tell thee, M",
    tweet: "@sonounrobot: I bear a charmed life, friendship is a wildly underrated medication."
  },
  {
    word: "Be-all and the end-all ",
    context: "ell<br>It were done quickly: if the assassination<br>Could trammel up the consequence, and catch<br>With his surcease success; that but this blow<br>Might be the be-all and the end-all here,<br>But here, upon this bank and shoal of time,<br>We'ld jump the life to come. But in these cases<br>We still have judgment here; ",
    tweet: "@CSPeirceSpeaks: It must be admitted...that if pragmaticism really made Doing to be the Be-all and the End-all of life, that would be its death... #Peirce"
  },
  {
    word: "Better foot before ",
    context: "f into their companies:<br>I have a way to win their loves again;<br>Bring them before me.<br>BASTARD<br>I will seek them out.<br>KING JOHN<br>Nay, but make haste; the better foot before.<br>O, let me have no subject enemies,<br>When adverse foreigners affright my towns<br>With dreadful pomp of stout invasion!<br>Be Mercury, set",
    tweet: "@CraigTrudgill: @tramsay14 that's because our wingers play on the wrong side so they have to check back on to their better foot before crossing."
  },
  {
    word: "In a better world than this ",
    context: "rtues<br>And pity her for her good father's sake;<br>And, on my life, his malice 'gainst the lady<br>Will suddenly break forth. Sir, fare you well:<br>Hereafter, in a better world than this,<br>I shall desire more love and knowledge of you.<br>ORLANDO<br>I rest much bounden to you: fare you well.<br>Exit LE BEAU<br><br>Thus must",
    tweet: "@BoxerlessBossk: In a better world than this, I would've watched the new #StarWarsRebels episode Legacy of Mandalore by now. Three more weeks!"
  },
  {
    word: "Neither a borrower nor a lender be ",
    context: "h, not gaudy;<br>For the apparel oft proclaims the man,<br>And they in France of the best rank and station<br>Are of a most select and generous chief in that.<br>Neither a borrower nor a lender be;<br>For loan oft loses both itself and friend,<br>And borrowing dulls the edge of husbandry.<br>This above all: to thine own"
  },
  {
    word: "Brave new world ",
    context: "her compass thee about!<br>Arise, and say how thou camest here.<br>MIRANDA<br>O, wonder!<br>How many goodly creatures are there here!<br>How beauteous mankind is! O brave new world,<br>That has such people in't!<br>PROSPERO<br>'Tis new to thee.<br>ALONSO<br>What is this maid with whom thou wast at play?<br>Your eld'st acquaintance "
  },
  {
    word: "Break the ice ",
    context: " be wed:<br>The younger then is free and not before.<br>TRANIO<br>If it be so, sir, that you are the man<br>Must stead us all and me amongst the rest,<br>And if you break the ice and do this feat,<br>Achieve the elder, set the younger free<br>For our access, whose hap shall be to have her<br>Will not so graceless be to be "
  },
  {
    word: "Breathed his last ",
    context: "ash this cold congealed blood<br>That glues my lips and will not let me speak.<br>Come quickly, Montague, or I am dead.<br>SOMERSET<br>Ah, Warwick! Montague hath breathed his last;<br>And to the latest gasp cried out for Warwick,<br>And said 'Commend me to my valiant brother.'<br>And more he would have said, and more he"
  },
  {
    word: "Brevity is the soul of wit ",
    context: "<br>What majesty should be, what duty is,<br>Why day is day, night night, and time is time,<br>Were nothing but to waste night, day and time.<br>Therefore, since brevity is the soul of wit,<br>And tediousness the limbs and outward flourishes,<br>I will be brief: your noble son is mad:<br>Mad call I it; for, to define tr"
  },
  {
    word: "Refuse to budge an inch ",
    context: ""
  },
  {
    word: "Catch a cold ",
    context: ""
  },
  {
    word: "Cold comfort ",
    context: "at the least. But wilt thou make a<br>fire, or shall I complain on thee to our mistress,<br>whose hand, she being now at hand, thou shalt soon<br>feel, to thy cold comfort, for being slow in thy hot office?<br>CURTIS<br>I prithee, good Grumio, tell me, how goes the world?<br>GRUMIO<br>A cold world, Curtis, in every offi"
  },
  {
    word: "Conscience does make cowards of us all ",
    context: "ntry from whose bourn<br>No traveller returns, puzzles the will<br>And makes us rather bear those ills we have<br>Than fly to others that we know not of?<br>Thus conscience does make cowards of us all;<br>And thus the native hue of resolution<br>Is sicklied o'er with the pale cast of thought,<br>And enterprises of great"
  },
  {
    word: "Come what come may ",
    context: " me,<br>Without my stir.<br>BANQUO<br>New horrors come upon him,<br>Like our strange garments, cleave not to their mould<br>But with the aid of use.<br>MACBETH<br>[Aside] Come what come may,<br>Time and the hour runs through the roughest day.<br>BANQUO<br>Worthy Macbeth, we stay upon your leisure.<br>MACBETH<br>Give me your favour: my"
  },
  {
    word: "Comparisons are odorous ",
    context: "h, honest as the skin between his brows.<br>VERGES<br>Yes, I thank God I am as honest as any man living<br>that is an old man and no honester than I.<br>DOGBERRY<br>Comparisons are odorous: palabras, neighbour Verges.<br>LEONATO<br>Neighbours, you are tedious.<br>DOGBERRY<br>It pleases your worship to say so, but we are the<br>p"
  },
  {
    word: "Crack of doom ",
    context: "w, is like the first.<br>A third is like the former. Filthy hags!<br>Why do you show me this? A fourth! Start, eyes!<br>What, will the line stretch out to the crack of doom?<br>Another yet! A seventh! I'll see no more:<br>And yet the eighth appears, who bears a glass<br>Which shows me many more; and some I see<br>That t"
  },
  {
    word: "Dead as a doornail ",
    context: ""
  },
  {
    word: "A dish fit for the gods ",
    context: "it,<br>And not dismember Caesar! But, alas,<br>Caesar must bleed for it! And, gentle friends,<br>Let's kill him boldly, but not wrathfully;<br>Let's carve him as a dish fit for the gods,<br>Not hew him as a carcass fit for hounds:<br>And let our hearts, as subtle masters do,<br>Stir up their servants to an act of rage,<br>"
  },
  {
    word: "Cry havoc and let slip the dogs of war ",
    context: ""
  },
  {
    word: "Dog will have his day ",
    context: "r you, sir;<br>What is the reason that you use me thus?<br>I loved you ever: but it is no matter;<br>Let Hercules himself do what he may,<br>The cat will mew and dog will have his day.<br>Exit<br><br>KING CLAUDIUS<br>I pray you, good Horatio, wait upon him.<br>Exit HORATIO<br><br>To LAERTES<br><br>Strengthen your patience in our last nig"
  },
  {
    word: "Devil incarnate ",
    context: ""
  },
  {
    word: "Eaten me out of house and home ",
    context: "nd he is arrested at my suit.<br>Lord Chief-Justice\tFor what sum?<br>MISTRESS QUICKLY<br>It is more than for some, my lord; it is for all,<br>all I have. He hath eaten me out of house and home;<br>he hath put all my substance into that fat belly of<br>his: but I will have some of it out again, or I<br>will ride thee o' "
  },
  {
    word: "Elbow room ",
    context: ""
  },
  {
    word: "Farewell to all my greatness ",
    context: ""
  },
  {
    word: "Faint hearted ",
    context: ""
  },
  {
    word: "Fancy-free ",
    context: "But I might see young Cupid's fiery shaft<br>Quench'd in the chaste beams of the watery moon,<br>And the imperial votaress passed on,<br>In maiden meditation, fancy-free.<br>Yet mark'd I where the bolt of Cupid fell:<br>It fell upon a little western flower,<br>Before milk-white, now purple with love's wound,<br>And maid"
  },
  {
    word: "Fight till the last gasp ",
    context: "ngues.<br>REIGNIER<br>My lord, where are you? what devise you on?<br>Shall we give over Orleans, or no?<br>JOAN LA PUCELLE<br>Why, no, I say, distrustful recreants!<br>Fight till the last gasp; I will be your guard.<br>CHARLES<br>What she says I'll confirm: we'll fight it out.<br>JOAN LA PUCELLE<br>Assign'd am I to be the Englis"
  },
  {
    word: "Flaming youth ",
    context: "<br>Or but a sickly part of one true sense<br>Could not so mope.<br>O shame! where is thy blush? Rebellious hell,<br>If thou canst mutine in a matron's bones,<br>To flaming youth let virtue be as wax,<br>And melt in her own fire: proclaim no shame<br>When the compulsive ardour gives the charge,<br>Since frost itself as act"
  },
  {
    word: "Forever and a day ",
    context: ""
  },
  {
    word: "For goodness' sake ",
    context: "rfeiting<br>Our own brains, and the opinion that we bring,<br>To make that only true we now intend,<br>Will leave us never an understanding friend.<br>Therefore, for goodness' sake, and as you are known<br>The first and happiest hearers of the town,<br>Be sad, as we would make ye: think ye see<br>The very persons of our"
  },
  {
    word: "Foregone conclusion ",
    context: "and then<br>Cried 'Cursed fate that gave thee to the Moor!'<br>OTHELLO<br>O monstrous! monstrous!<br>IAGO<br>Nay, this was but his dream.<br>OTHELLO<br>But this denoted a foregone conclusion:<br>'Tis a shrewd doubt, though it be but a dream.<br>IAGO<br>And this may help to thicken other proofs<br>That do demonstrate thinly.<br>OTHELLO"
  },
  {
    word: "Full circle ",
    context: "instruments to plague us:<br>The dark and vicious place where thee he got<br>Cost him his eyes.<br>EDMUND<br>Thou hast spoken right, 'tis true;<br>The wheel is come full circle: I am here.<br>ALBANY<br>Methought thy very gait did prophesy<br>A royal nobleness: I must embrace thee:<br>Let sorrow split my heart, if ever I<br>Did h"
  },
  {
    word: "The game is afoot ",
    context: "d only stays but to behold the face<br>Of that occasion that shall bring it on.<br>HOTSPUR<br>I smell it: upon my life, it will do well.<br>NORTHUMBERLAND<br>Before the game is afoot, thou still let'st slip.<br>HOTSPUR<br>Why, it cannot choose but be a noble plot;<br>And then the power of Scotland and of York,<br>To join with"
  },
  {
    word: "The game is up ",
    context: " nurse; they took thee for<br>their mother,<br>And every day do honour to her grave:<br>Myself, Belarius, that am Morgan call'd,<br>They take for natural father. The game is up.<br>Exit<br><br>SCENE IV. Country near Milford-Haven.<br><br>Enter PISANIO and IMOGEN<br>IMOGEN<br>Thou told'st me, when we came from horse, the place<br>Was n"
  },
  {
    word: "Give the devil his due ",
    context: "d a cold capon's leg?<br>PRINCE HENRY<br>Sir John stands to his word, the devil shall have<br>his bargain; for he was never yet a breaker of<br>proverbs: he will give the devil his due.<br>POINS<br>Then art thou damned for keeping thy word with the devil.<br>PRINCE HENRY<br>Else he had been damned for cozening the devil.<br>P"
  },
  {
    word: "Good riddance ",
    context: " hanged, like clotpoles, ere I come<br>any more to your tents: I will keep where there is<br>wit stirring and leave the faction of fools.<br>Exit<br><br>PATROCLUS<br>A good riddance.<br>ACHILLES<br>Marry, this, sir, is proclaim'd through all our host:<br>That Hector, by the fifth hour of the sun,<br>Will with a trumpet 'twixt ou"
  },
  {
    word: "Jealousy is the green-eyed monster ",
    context: ""
  },
  {
    word: "It was Greek to me ",
    context: "ll you that, Ill ne'er look you i' the<br>face again: but those that understood him smiled at<br>one another and shook their heads; but, for mine own<br>part, it was Greek to me. I could tell you more<br>news too: Marullus and Flavius, for pulling scarfs<br>off Caesar's images, are put to silence. Fare you<br>well. T"
  },
  {
    word: "Heart of gold ",
    context: "ven so. What are you?<br>PISTOL<br>As good a gentleman as the emperor.<br>KING HENRY V<br>Then you are a better than the king.<br>PISTOL<br>The king's a bawcock, and a heart of gold,<br>A lad of life, an imp of fame;<br>Of parents good, of fist most valiant.<br>I kiss his dirty shoe, and from heart-string<br>I love the lovely bu"
  },
  {
    word: "Her infinite variety ",
    context: "less, power breathe forth.<br>MECAENAS<br>Now Antony must leave her utterly.<br>DOMITIUS ENOBARBUS<br>Never; he will not:<br>Age cannot wither her, nor custom stale<br>Her infinite variety: other women cloy<br>The appetites they feed: but she makes hungry<br>Where most she satisfies; for vilest things<br>Become themselves in "
  },
  {
    word: "'Tis high time ",
    context: "man would run for life,<br>So fly I from her that would be my wife.<br>Exit<br><br>ANTIPHOLUS<br>OF SYRACUSE<br>There's none but witches do inhabit here;<br>And therefore 'tis high time that I were hence.<br>She that doth call me husband, even my soul<br>Doth for a wife abhor. But her fair sister,<br>Possess'd with such a gentle"
  },
  {
    word: "Hoist with his own petard ",
    context: " I will adders fang'd,<br>They bear the mandate; they must sweep my way,<br>And marshal me to knavery. Let it work;<br>For 'tis the sport to have the engineer<br>Hoist with his own petard: and 't shall go hard<br>But I will delve one yard below their mines,<br>And blow them at the moon: O, 'tis most sweet,<br>When in on"
  },
  {
    word: "Household words ",
    context: "ld men forget: yet all shall be forgot,<br>But he'll remember with advantages<br>What feats he did that day: then shall our names.<br>Familiar in his mouth as household words<br>Harry the king, Bedford and Exeter,<br>Warwick and Talbot, Salisbury and Gloucester,<br>Be in their flowing cups freshly remember'd.<br>This st"
  },
  {
    word: "A horse, a horse! My kingdom for a horse! ",
    context: ""
  },
  {
    word: "Ill wind which blows no man to good ",
    context: " the court! let him come in.<br>Enter PISTOL<br><br>How now, Pistol!<br>PISTOL<br>Sir John, God save you!<br>FALSTAFF<br>What wind blew you hither, Pistol?<br>PISTOL<br>Not the ill wind which blows no man to good. Sweet<br>knight, thou art now one of the greatest men in this realm.<br>SILENCE<br>By'r lady, I think a' be, but goodman P"
  },
  {
    word: "Improbable fiction ",
    context: "our element: you shall know<br>more hereafter.<br>Exit<br><br>SIR TOBY BELCH<br>Is't possible?<br>FABIAN<br>If this were played upon a stage now, I could<br>condemn it as an improbable fiction.<br>SIR TOBY BELCH<br>His very genius hath taken the infection of the device, man.<br>MARIA<br>Nay, pursue him now, lest the device take air an"
  },
  {
    word: "In a pickle ",
    context: ""
  },
  {
    word: "In my heart of hearts ",
    context: ""
  },
  {
    word: "In my mind's eye ",
    context: ".<br>Would I had met my dearest foe in heaven<br>Or ever I had seen that day, Horatio!<br>My father!--methinks I see my father.<br>HORATIO<br>Where, my lord?<br>HAMLET<br>In my mind's eye, Horatio.<br>HORATIO<br>I saw him once; he was a goodly king.<br>HAMLET<br>He was a man, take him for all in all,<br>I shall not look upon his like "
  },
  {
    word: "Infinite space ",
    context: "RANTZ<br>Why then, your ambition makes it one; 'tis too<br>narrow for your mind.<br>HAMLET<br>O God, I could be bounded in a nut shell and count<br>myself a king of infinite space, were it not that I<br>have bad dreams.<br>GUILDENSTERN<br>Which dreams indeed are ambition, for the very<br>substance of the ambitious is merely t"
  },
  {
    word: "Infirm of purpose ",
    context: "hem; and smear<br>The sleepy grooms with blood.<br>MACBETH<br>I'll go no more:<br>I am afraid to think what I have done;<br>Look on't again I dare not.<br>LADY MACBETH<br>Infirm of purpose!<br>Give me the daggers: the sleeping and the dead<br>Are but as pictures: 'tis the eye of childhood<br>That fears a painted devil. If he do "
  },
  {
    word: "In my book of memory ",
    context: "r;<br>And that I'll prove on better men than Somerset,<br>Were growing time once ripen'd to my will.<br>For your partaker Pole and you yourself,<br>I'll note you in my book of memory,<br>To scourge you for this apprehension:<br>Look to it well and say you are well warn'd.<br>SOMERSET<br>Ah, thou shalt find us ready for the"
  },
  {
    word: "It is but so-so",
    context: ""
  },
  {
    word: "It smells to heaven ",
    context: "l, my liege:<br>I'll call upon you ere you go to bed,<br>And tell you what I know.<br>KING CLAUDIUS<br>Thanks, dear my lord.<br>Exit POLONIUS<br><br>O, my offence is rank it smells to heaven;<br>It hath the primal eldest curse upon't,<br>A brother's murder. Pray can I not,<br>Though inclination be as sharp as will:<br>My stronger g"
  },
  {
    word: "Itching palm ",
    context: "e as this it is not meet<br>That every nice offence should bear his comment.<br>BRUTUS<br>Let me tell you, Cassius, you yourself<br>Are much condemn'd to have an itching palm;<br>To sell and mart your offices for gold<br>To undeservers.<br>CASSIUS<br>I an itching palm!<br>You know that you are Brutus that speak this,<br>Or, by t"
  },
  {
    word: "Kill with kindness ",
    context: ""
  },
  {
    word: "Killing frost ",
    context: "n: to-day he puts forth<br>The tender leaves of hopes; to-morrow blossoms,<br>And bears his blushing honours thick upon him;<br>The third day comes a frost, a killing frost,<br>And, when he thinks, good easy man, full surely<br>His greatness is a-ripening, nips his root,<br>And then he falls, as I do. I have ventured"
  },
  {
    word: "Knit brow ",
    context: ""
  },
  {
    word: "Knock knock! Who's there? ",
    context: ""
  },
  {
    word: "Laid on with a trowel ",
    context: "E BEAU<br>What colour, madam! how shall I answer you?<br>ROSALIND<br>As wit and fortune will.<br>TOUCHSTONE<br>Or as the Destinies decree.<br>CELIA<br>Well said: that was laid on with a trowel.<br>TOUCHSTONE<br>Nay, if I keep not my rank,--<br>ROSALIND<br>Thou losest thy old smell.<br>LE BEAU<br>You amaze me, ladies: I would have told yo"
  },
  {
    word: "Laughing stock ",
    context: ""
  },
  {
    word: "Laugh yourself into stitches ",
    context: ""
  },
  {
    word: "Lean and hungry look ",
    context: "er is.<br>CAESAR<br>Antonius!<br>ANTONY<br>Caesar?<br>CAESAR<br>Let me have men about me that are fat;<br>Sleek-headed men and such as sleep o' nights:<br>Yond Cassius has a lean and hungry look;<br>He thinks too much: such men are dangerous.<br>ANTONY<br>Fear him not, Caesar; he's not dangerous;<br>He is a noble Roman and well given."
  },
  {
    word: "Lie low ",
    context: "hasty now? well, all is one.<br>DON PEDRO<br>Nay, do not quarrel with us, good old man.<br>ANTONIO<br>If he could right himself with quarreling,<br>Some of us would lie low.<br>CLAUDIO<br>Who wrongs him?<br>LEONATO<br>Marry, thou dost wrong me; thou dissembler, thou:--<br>Nay, never lay thy hand upon thy sword;<br>I fear thee not.<br>"
  },
  {
    word: "Live long day ",
    context: ""
  },
  {
    word: "Love is blind ",
    context: "u art.<br>JESSICA<br>Here, catch this casket; it is worth the pains.<br>I am glad 'tis night, you do not look on me,<br>For I am much ashamed of my exchange:<br>But love is blind and lovers cannot see<br>The pretty follies that themselves commit;<br>For if they could, Cupid himself would blush<br>To see me thus transformed"
  },
  {
    word: "Men's evil manners live in brass; their virtues we write in water ",
    context: ""
  },
  {
    word: "Melted into thin air ",
    context: ""
  },
  {
    word: "Though this be madness, yet there is method in it ",
    context: ""
  },
  {
    word: "Make a virtue of necessity ",
    context: " much want--<br>Second Outlaw<br>Indeed, because you are a banish'd man,<br>Therefore, above the rest, we parley to you:<br>Are you content to be our general?<br>To make a virtue of necessity<br>And live, as we do, in this wilderness?<br>Third Outlaw<br>What say'st thou? wilt thou be of our consort?<br>Say ay, and be the capt"
  },
  {
    word: "The Makings of",
    context: ""
  },
  {
    word: "Milk of human kindness ",
    context: "Lay it<br>to thy heart, and farewell.'<br>Glamis thou art, and Cawdor; and shalt be<br>What thou art promised: yet do I fear thy nature;<br>It is too full o' the milk of human kindness<br>To catch the nearest way: thou wouldst be great;<br>Art not without ambition, but without<br>The illness should attend it: what thou "
  },
  {
    word: "Ministering angel ",
    context: "er<br>As to peace-parted souls.<br>LAERTES<br>Lay her i' the earth:<br>And from her fair and unpolluted flesh<br>May violets spring! I tell thee, churlish priest,<br>A ministering angel shall my sister be,<br>When thou liest howling.<br>HAMLET<br>What, the fair Ophelia!<br>QUEEN GERTRUDE<br>Sweets to the sweet: farewell!<br>Scattering"
  },
  {
    word: "Misery acquaints a man with strange bedfellows ",
    context: ""
  },
  {
    word: "More honored in the breach than in the observance ",
    context: ""
  },
  {
    word: "More in sorrow than in anger ",
    context: "d to foot.<br>HAMLET<br>Then saw you not his face?<br>HORATIO<br>O, yes, my lord; he wore his beaver up.<br>HAMLET<br>What, look'd he frowningly?<br>HORATIO<br>A countenance more in sorrow than in anger.<br>HAMLET<br>Pale or red?<br>HORATIO<br>Nay, very pale.<br>HAMLET<br>And fix'd his eyes upon you?<br>HORATIO<br>Most constantly.<br>HAMLET<br>I would "
  },
  {
    word: "More sinned against than sinning ",
    context: ""
  },
  {
    word: "Much Ado About Nothing ",
    context: "ends ere long;<br>Else the Puck a liar call;<br>So, good night unto you all.<br>Give me your hands, if we be friends,<br>And Robin shall restore amends.<br><br><br><br><br><br><br><br><br><br>Much Ado About Nothing<br>ACT I<br><br>SCENE I. Before LEONATO'S house.<br><br>Enter LEONATO, HERO, and BEATRICE, with a Messenger<br>LEONATO<br>I learn in this letter tha"
  },
  {
    word: "Murder most foul ",
    context: ". List, list, O, list!<br>If thou didst ever thy dear father love--<br>HAMLET<br>O God!<br>Ghost<br>Revenge his foul and most unnatural murder.<br>HAMLET<br>Murder!<br>Ghost<br>Murder most foul, as in the best it is;<br>But this most foul, strange and unnatural.<br>HAMLET<br>Haste me to know't, that I, with wings as swift<br>As meditatio"
  },
  {
    word: "Naked truth ",
    context: " Pompey hath made the challenge.<br>DON<br>ADRIANO DE ARMADO<br>Sweet bloods, I both may and will.<br>BIRON<br>What reason have you for't?<br>DON<br>ADRIANO DE ARMADO<br>The naked truth of it is, I have no shirt; I go<br>woolward for penance.<br>BOYET<br>True, and it was enjoined him in Rome for want of<br>linen: since when, I'll be s"
  },
  {
    word: "Neither rhyme nor reason ",
    context: " to thee, youth, by the white hand of<br>Rosalind, I am that he, that unfortunate he.<br>ROSALIND<br>But are you so much in love as your rhymes speak?<br>ORLANDO<br>Neither rhyme nor reason can express how much.<br>ROSALIND<br>Love is merely a madness, and, I tell you, deserves<br>as well a dark house and a whip as madmen "
  },
  {
    word: "Not slept one wink ",
    context: "ife?<br>Thou art too slow to do thy master's bidding,<br>When I desire it too.<br>PISANIO<br>O gracious lady,<br>Since I received command to do this business<br>I have not slept one wink.<br>IMOGEN<br>Do't, and to bed then.<br>PISANIO<br>I'll wake mine eye-balls blind first.<br>IMOGEN<br>Wherefore then<br>Didst undertake it? Why hast tho"
  },
  {
    word: "Nothing in his life became him like the leaving it ",
    context: ""
  },
  {
    word: "Obvious as a nose on a man's face ",
    context: ""
  },
  {
    word: "Once more into the breach ",
    context: ""
  },
  {
    word: "One fell swoop ",
    context: "e this deadly grief.<br>MACDUFF<br>He has no children. All my pretty ones?<br>Did you say all? O hell-kite! All?<br>What, all my pretty chickens and their dam<br>At one fell swoop?<br>MALCOLM<br>Dispute it like a man.<br>MACDUFF<br>I shall do so;<br>But I must also feel it as a man:<br>I cannot but remember such things were,<br>That w"
  },
  {
    word: "One that loved not wisely but too well ",
    context: "your letters,<br>When you shall these unlucky deeds relate,<br>Speak of me as I am; nothing extenuate,<br>Nor set down aught in malice: then must you speak<br>Of one that loved not wisely but too well;<br>Of one not easily jealous, but being wrought<br>Perplex'd in the extreme; of one whose hand,<br>Like the base Indian"
  },
  {
    word: "Time is out of joint ",
    context: "ay do, to express his love and friending to you,<br>God willing, shall not lack. Let us go in together;<br>And still your fingers on your lips, I pray.<br>The time is out of joint: O cursed spite,<br>That ever I was born to set it right!<br>Nay, come, let's go together.<br>Exeunt<br><br>ACT II<br><br>SCENE I. A room in POLONIUS'"
  },
  {
    word: "Out of the jaws of death ",
    context: "TONIO<br>O heavens themselves!<br>Second Officer<br>Come, sir, I pray you, go.<br>ANTONIO<br>Let me speak a little. This youth that you see here<br>I snatch'd one half out of the jaws of death,<br>Relieved him with such sanctity of love,<br>And to his image, which methought did promise<br>Most venerable worth, did I devotion."
  },
  {
    word: "Own flesh and blood ",
    context: "t, the Jew's man, and I am sure Margery your<br>wife is my mother.<br>GOBBO<br>Her name is Margery, indeed: I'll be sworn, if thou<br>be Launcelot, thou art mine own flesh and blood.<br>Lord worshipped might he be! what a beard hast thou<br>got! thou hast got more hair on thy chin than<br>Dobbin my fill-horse has on his"
  },
  {
    word: "Star-crossed lovers ",
    context: ""
  },
  {
    word: "Parting is such sweet sorrow ",
    context: ""
  },
  {
    word: "What's past is prologue ",
    context: "n chins<br>Be rough and razorable; she that--from whom?<br>We all were sea-swallow'd, though some cast again,<br>And by that destiny to perform an act<br>Whereof what's past is prologue, what to come<br>In yours and my discharge.<br>SEBASTIAN<br>What stuff is this! how say you?<br>'Tis true, my brother's daughter's queen o"
  },
  {
    word: "[What] a piece of work [is man] ",
    context: ""
  },
  {
    word: "Pitched battle ",
    context: "Rage like an angry boar chafed with sweat?<br>Have I not heard great ordnance in the field,<br>And heaven's artillery thunder in the skies?<br>Have I not in a pitched battle heard<br>Loud 'larums, neighing steeds, and trumpets' clang?<br>And do you tell me of a woman's tongue,<br>That gives not half so great a blow t"
  },
  {
    word: "A plague on both your houses ",
    context: ""
  },
  {
    word: "Play fast and loose ",
    context: "ensed kings:<br>And shall these hands, so lately purged of blood,<br>So newly join'd in love, so strong in both,<br>Unyoke this seizure and this kind regreet?<br>Play fast and loose with faith? so jest with heaven,<br>Make such unconstant children of ourselves,<br>As now again to snatch our palm from palm,<br>Unswear fa"
  },
  {
    word: "Pomp and circumstance ",
    context: "rewell!<br>Farewell the neighing steed, and the shrill trump,<br>The spirit-stirring drum, the ear-piercing fife,<br>The royal banner, and all quality,<br>Pride, pomp and circumstance of glorious war!<br>And, O you mortal engines, whose rude throats<br>The immortal Jove's dead clamours counterfeit,<br>Farewell! Othello'"
  },
  {
    word: "A poor thing, but mine own ",
    context: ""
  },
  {
    word: "Pound of flesh ",
    context: "that the trade and profit of the city<br>Consisteth of all nations. Therefore, go:<br>These griefs and losses have so bated me,<br>That I shall hardly spare a pound of flesh<br>To-morrow to my bloody creditor.<br>Well, gaoler, on. Pray God, Bassanio come<br>To see me pay his debt, and then I care not!<br>Exeunt<br><br>SCENE I"
  },
  {
    word: "Primrose path ",
    context: "brother,<br>Do not, as some ungracious pastors do,<br>Show me the steep and thorny way to heaven;<br>Whiles, like a puff'd and reckless libertine,<br>Himself the primrose path of dalliance treads,<br>And recks not his own rede.<br>LAERTES<br>O, fear me not.<br>I stay too long: but here my father comes.<br>Enter POLONIUS<br><br>A do"
  },
  {
    word: "Quality of mercy is not strained ",
    context: ""
  },
  {
    word: "Salad days ",
    context: "ll give thee bloody teeth,<br>If thou with Caesar paragon again<br>My man of men.<br>CHARMIAN<br>By your most gracious pardon,<br>I sing but after you.<br>CLEOPATRA<br>My salad days,<br>When I was green in judgment: cold in blood,<br>To say as I said then! But, come, away;<br>Get me ink and paper:<br>He shall have every day a sever"
  },
  {
    word: "Sea change ",
    context: ""
  },
  {
    word: "Seen better days ",
    context: "tis to pity and be pitied,<br>Let gentleness my strong enforcement be:<br>In the which hope I blush, and hide my sword.<br>DUKE SENIOR<br>True is it that we have seen better days,<br>And have with holy bell been knoll'd to church<br>And sat at good men's feasts and wiped our eyes<br>Of drops that sacred pity hath engend"
  },
  {
    word: "Send packing ",
    context: ""
  },
  {
    word: "How sharper than the serpent's tooth it is to have a thankless child ",
    context: ""
  },
  {
    word: "Shall I compare thee to a summer's day ",
    context: ""
  },
  {
    word: "Make short shrift ",
    context: ""
  },
  {
    word: "Sick at heart ",
    context: "efully upon your hour.<br>BERNARDO<br>'Tis now struck twelve; get thee to bed, Francisco.<br>FRANCISCO<br>For this relief much thanks: 'tis bitter cold,<br>And I am sick at heart.<br>BERNARDO<br>Have you had quiet guard?<br>FRANCISCO<br>Not a mouse stirring.<br>BERNARDO<br>Well, good night.<br>If you do meet Horatio and Marcellus,<br>The"
  },
  {
    word: "Snail paced ",
    context: ""
  },
  {
    word: "Something in the wind ",
    context: "which was best, we shall part with neither.<br>DROMIO OF EPHESUS<br>They stand at the door, master; bid them welcome hither.<br>ANTIPHOLUS<br>OF EPHESUS<br>There is something in the wind, that we cannot get in.<br>DROMIO OF EPHESUS<br>You would say so, master, if your garments were thin.<br>Your cake there is warm within; "
  },
  {
    word: "Something wicked this way comes ",
    context: "fairies in a ring,<br>Enchanting all that you put in.<br>Music and a song: 'Black spirits,' & c<br><br>HECATE retires<br><br>Second Witch<br>By the pricking of my thumbs,<br>Something wicked this way comes.<br>Open, locks,<br>Whoever knocks!<br>Enter MACBETH<br><br>MACBETH<br>How now, you secret, black, and midnight hags!<br>What is't you do?<br>"
  },
  {
    word: "A sorry sight ",
    context: "hen?<br>LADY MACBETH<br>Now.<br>MACBETH<br>As I descended?<br>LADY MACBETH<br>Ay.<br>MACBETH<br>Hark!<br>Who lies i' the second chamber?<br>LADY MACBETH<br>Donalbain.<br>MACBETH<br>This is a sorry sight.<br>Looking on his hands<br><br>LADY MACBETH<br>A foolish thought, to say a sorry sight.<br>MACBETH<br>There's one did laugh in's sleep, and one cried<br>'Mu"
  },
  {
    word: "Sound and fury ",
    context: "s but a walking shadow, a poor player<br>That struts and frets his hour upon the stage<br>And then is heard no more: it is a tale<br>Told by an idiot, full of sound and fury,<br>Signifying nothing.<br>Enter a Messenger<br><br>Thou comest to use thy tongue; thy story quickly.<br>Messenger<br>Gracious my lord,<br>I should report t"
  },
  {
    word: "Spotless reputation ",
    context: "<br>THOMAS MOWBRAY<br>Yea, but not change his spots: take but my shame.<br>And I resign my gage. My dear dear lord,<br>The purest treasure mortal times afford<br>Is spotless reputation: that away,<br>Men are but gilded loam or painted clay.<br>A jewel in a ten-times-barr'd-up chest<br>Is a bold spirit in a loyal breast.<br>Mi"
  },
  {
    word: "Stony hearted ",
    context: ""
  },
  {
    word: "Such stuff as dreams are made on ",
    context: ""
  },
  {
    word: "Smooth runs the water where the brook is deep ",
    context: "was successive heir,<br>And such high vaunts of his nobility,<br>Did instigate the bedlam brain-sick duchess<br>By wicked means to frame our sovereign's fall.<br>Smooth runs the water where the brook is deep;<br>And in his simple show he harbours treason.<br>The fox barks not when he would steal the lamb.<br>No, no, my "
  },
  {
    word: "The short and the long of it ",
    context: "ur<br>worship's a wanton! Well, heaven forgive you and all<br>of us, I pray!<br>FALSTAFF<br>Mistress Ford; come, Mistress Ford,--<br>MISTRESS QUICKLY<br>Marry, this is the short and the long of it; you<br>have brought her into such a canaries as 'tis<br>wonderful. The best courtier of them all, when the<br>court lay at Windso"
  },
  {
    word: "Sweet are the uses of adversity ",
    context: " blows upon my body,<br>Even till I shrink with cold, I smile and say<br>'This is no flattery: these are counsellors<br>That feelingly persuade me what I am.'<br>Sweet are the uses of adversity,<br>Which, like the toad, ugly and venomous,<br>Wears yet a precious jewel in his head;<br>And this our life exempt from public"
  },
  {
    word: "Sweets to the sweet ",
    context: " spring! I tell thee, churlish priest,<br>A ministering angel shall my sister be,<br>When thou liest howling.<br>HAMLET<br>What, the fair Ophelia!<br>QUEEN GERTRUDE<br>Sweets to the sweet: farewell!<br>Scattering flowers<br><br>I hoped thou shouldst have been my Hamlet's wife;<br>I thought thy bride-bed to have deck'd, sweet mai"
  },
  {
    word: "Swift as a shadow ",
    context: "love by another's eyes.<br>LYSANDER<br>Or, if there were a sympathy in choice,<br>War, death, or sickness did lay siege to it,<br>Making it momentany as a sound,<br>Swift as a shadow, short as any dream;<br>Brief as the lightning in the collied night,<br>That, in a spleen, unfolds both heaven and earth,<br>And ere a man ha"
  },
  {
    word: "Tedious as a twice-told tale ",
    context: "d my sorrows' cure!<br>Exit<br><br>KING PHILIP<br>I fear some outrage, and I'll follow her.<br>Exit<br><br>LEWIS<br>There's nothing in this world can make me joy:<br>Life is as tedious as a twice-told tale<br>Vexing the dull ear of a drowsy man;<br>And bitter shame hath spoil'd the sweet world's taste<br>That it yields nought but sham"
  },
  {
    word: "Set my teeth on edge ",
    context: ""
  },
  {
    word: "Tell truth and shame the devil ",
    context: " call for them?<br>GLENDOWER<br>Why, I can teach you, cousin, to command<br>The devil.<br>HOTSPUR<br>And I can teach thee, coz, to shame the devil<br>By telling truth: tell truth and shame the devil.<br>If thou have power to raise him, bring him hither,<br>And I'll be sworn I have power to shame him hence.<br>O, while you liv"
  },
  {
    word: "Thereby hangs a tale ",
    context: " it was nine,<br>And after one hour more 'twill be eleven;<br>And so, from hour to hour, we ripe and ripe,<br>And then, from hour to hour, we rot and rot;<br>And thereby hangs a tale.' When I did hear<br>The motley fool thus moral on the time,<br>My lungs began to crow like chanticleer,<br>That fools should be so deep-c"
  },
  {
    word: "There's no such thing ",
    context: "de the fools o' the other senses,<br>Or else worth all the rest; I see thee still,<br>And on thy blade and dudgeon gouts of blood,<br>Which was not so before. There's no such thing:<br>It is the bloody business which informs<br>Thus to mine eyes. Now o'er the one halfworld<br>Nature seems dead, and wicked dreams abus"
  },
  {
    word: "There's the rub ",
    context: "and the thousand natural shocks<br>That flesh is heir to, 'tis a consummation<br>Devoutly to be wish'd. To die, to sleep;<br>To sleep: perchance to dream: ay, there's the rub;<br>For in that sleep of death what dreams may come<br>When we have shuffled off this mortal coil,<br>Must give us pause: there's the respect<br>T"
  },
  {
    word: "This mortal coil ",
    context: "ish'd. To die, to sleep;<br>To sleep: perchance to dream: ay, there's the rub;<br>For in that sleep of death what dreams may come<br>When we have shuffled off this mortal coil,<br>Must give us pause: there's the respect<br>That makes calamity of so long life;<br>For who would bear the whips and scorns of time,<br>The op"
  },
  {
    word: "To gild refined gold, to paint the lily ",
    context: "ot the land<br>With any long'd-for change or better state.<br>SALISBURY<br>Therefore, to be possess'd with double pomp,<br>To guard a title that was rich before,<br>To gild refined gold, to paint the lily,<br>To throw a perfume on the violet,<br>To smooth the ice, or add another hue<br>Unto the rainbow, or with taper-light"
  },
  {
    word: "To thine own self be true ",
    context: ""
  },
  {
    word: "Too much of a good thing ",
    context: "thou have me?<br>ROSALIND<br>Ay, and twenty such.<br>ORLANDO<br>What sayest thou?<br>ROSALIND<br>Are you not good?<br>ORLANDO<br>I hope so.<br>ROSALIND<br>Why then, can one desire too much of a good thing?<br>Come, sister, you shall be the priest and marry us.<br>Give me your hand, Orlando. What do you say, sister?<br>ORLANDO<br>Pray thee, "
  },
  {
    word: "Tower of strength ",
    context: "the foe?<br>NORFOLK<br>Six or seven thousand is their utmost power.<br>KING RICHARD III<br>Why, our battalion trebles that account:<br>Besides, the king's name is a tower of strength,<br>Which they upon the adverse party want.<br>Up with my tent there! Valiant gentlemen,<br>Let us survey the vantage of the field<br>Call for s"
  },
  {
    word: "Towering passion ",
    context: "ot myself;<br>For, by the image of my cause, I see<br>The portraiture of his: I'll court his favours.<br>But, sure, the bravery of his grief did put me<br>Into a towering passion.<br>HORATIO<br>Peace! who comes here?<br>Enter OSRIC<br><br>OSRIC<br>Your lordship is right welcome back to Denmark.<br>HAMLET<br>I humbly thank you, sir. Do"
  },
  {
    word: "Trippingly on the tongue ",
    context: "t not unwatch'd go.<br>Exeunt<br><br>SCENE II. A hall in the castle.<br><br>Enter HAMLET and Players<br>HAMLET<br>Speak the speech, I pray you, as I pronounced it to<br>you, trippingly on the tongue: but if you mouth it,<br>as many of your players do, I had as lief the<br>town-crier spoke my lines. Nor do not saw the air<br>too muc"
  },
  {
    word: "Truth will out ",
    context: "man, I will tell you news of<br>your son: give me your blessing: truth will come<br>to light; murder cannot be hid long; a man's son<br>may, but at the length truth will out.<br>GOBBO<br>Pray you, sir, stand up: I am sure you are not<br>Launcelot, my boy.<br>LAUNCELOT<br>Pray you, let's have no more fooling about it, but<br>g"
  },
  {
    word: "Violent delights have violent ends ",
    context: "t:<br>Do thou but close our hands with holy words,<br>Then love-devouring death do what he dare;<br>It is enough I may but call her mine.<br>FRIAR LAURENCE<br>These violent delights have violent ends<br>And in their triumph die, like fire and powder,<br>Which as they kiss consume: the sweetest honey<br>Is loathsome in his "
  },
  {
    word: "Wear my heart upon my sleeve ",
    context: " peculiar end:<br>For when my outward action doth demonstrate<br>The native act and figure of my heart<br>In compliment extern, 'tis not long after<br>But I will wear my heart upon my sleeve<br>For daws to peck at: I am not what I am.<br>RODERIGO<br>What a full fortune does the thicklips owe<br>If he can carry't thus!<br>IAGO"
  },
  {
    word: "What the dickens ",
    context: "ad,<br>you two would marry.<br>MISTRESS PAGE<br>Be sure of that,--two other husbands.<br>FORD<br>Where had you this pretty weather-cock?<br>MISTRESS PAGE<br>I cannot tell what the dickens his name is my<br>husband had him of. What do you call your knight's<br>name, sirrah?<br>ROBIN<br>Sir John Falstaff.<br>FORD<br>Sir John Falstaff!<br>MIST"
  },
  {
    word: "What's done is done ",
    context: "ur companions making,<br>Using those thoughts which should indeed have died<br>With them they think on? Things without all remedy<br>Should be without regard: what's done is done.<br>MACBETH<br>We have scotch'd the snake, not kill'd it:<br>She'll close and be herself, whilst our poor malice<br>Remains in danger of her f"
  },
  {
    word: "What's in a name? A rose by any other name would smell as sweet. ",
    context: ""
  },
  {
    word: "What fools these mortals be ",
    context: "K<br>Captain of our fairy band,<br>Helena is here at hand;<br>And the youth, mistook by me,<br>Pleading for a lover's fee.<br>Shall we their fond pageant see?<br>Lord, what fools these mortals be!<br>OBERON<br>Stand aside: the noise they make<br>Will cause Demetrius to awake.<br>PUCK<br>Then will two at once woo one;<br>That must need"
  },
  {
    word: "Wild-goose chase ",
    context: "CUTIO<br>Come between us, good Benvolio; my wits faint.<br>ROMEO<br>Switch and spurs, switch and spurs; or I'll cry a match.<br>MERCUTIO<br>Nay, if thy wits run the wild-goose chase, I have<br>done, for thou hast more of the wild-goose in one of<br>thy wits than, I am sure, I have in my whole five:<br>was I with you there "
  },
  {
    word: "Wish is father to that thought ",
    context: ""
  },
  {
    word: "Witching time of night ",
    context: "me by and by.<br>LORD POLONIUS<br>I will say so.<br>HAMLET<br>By and by is easily said.<br>Exit POLONIUS<br><br>Leave me, friends.<br>Exeunt all but HAMLET<br><br>Tis now the very witching time of night,<br>When churchyards yawn and hell itself breathes out<br>Contagion to this world: now could I drink hot blood,<br>And do such bitter bu"
  },
  {
    word: "Working-day world ",
    context: "and the other mad<br>without any.<br>CELIA<br>But is all this for your father?<br>ROSALIND<br>No, some of it is for my child's father. O, how<br>full of briers is this working-day world!<br>CELIA<br>They are but burs, cousin, thrown upon thee in<br>holiday foolery: if we walk not in the trodden<br>paths our very petticoats will "
  },
  {
    word: "The world's my oyster ",
    context: ""
  },
  {
    word: "Yeoman's service ",
    context: "rote it fair:<br>I once did hold it, as our statists do,<br>A baseness to write fair and labour'd much<br>How to forget that learning, but, sir, now<br>It did me yeoman's service: wilt thou know<br>The effect of what I wrote?<br>HORATIO<br>Ay, good my lord.<br>HAMLET<br>An earnest conjuration from the king,<br>As England was his"
  },
  {
    word: "abstemious",
    context: " conceive.<br>Exit<br><br>PROSPERO<br>Look thou be true; do not give dalliance<br>Too much the rein: the strongest oaths are straw<br>To the fire i' the blood: be more abstemious,<br>Or else, good night your vow!<br>FERDINAND<br>I warrant you sir;<br>The white cold virgin snow upon my heart<br>Abates the ardour of my liver.<br>PROSPER"
  },
  {
    word: "academe",
    context: "ge army of the world's desires,--<br>Our late edict shall strongly stand in force:<br>Navarre shall be the wonder of the world;<br>Our court shall be a little Academe,<br>Still and contemplative in living art.<br>You three, Biron, Dumain, and Longaville,<br>Have sworn for three years' term to live with me<br>My fellow-s"
  },
  {
    word: "accommodation",
    context: "fflict: merely, thou art death's fool;<br>For him thou labour'st by thy flight to shun<br>And yet runn'st toward him still. Thou art not noble;<br>For all the accommodations that thou bear'st<br>Are nursed by baseness. Thou'rt by no means valiant;<br>For thou dost fear the soft and tender fork<br>Of a poor worm. Thy "
  },
  {
    word: "accused",
    context: "<br>DIANA<br>I'll put in bail, my liege.<br>KING<br>I think thee now some common customer.<br>DIANA<br>By Jove, if ever I knew man, 'twas you.<br>KING<br>Wherefore hast thou accused him all this while?<br>DIANA<br>Because he's guilty, and he is not guilty:<br>He knows I am no maid, and he'll swear to't;<br>I'll swear I am a maid, and "
  },
  {
    word: "addiction",
    context: " sentences;<br>So that the art and practic part of life<br>Must be the mistress to this theoric:<br>Which is a wonder how his grace should glean it,<br>Since his addiction was to courses vain,<br>His companies unletter'd, rude and shallow,<br>His hours fill'd up with riots, banquets, sports,<br>And never noted in him an"
  },
  {
    word: "admirable",
    context: "ded<br><br>First Lord<br>O, my sweet lord, that you will stay behind us!<br>PAROLLES<br>'Tis not his fault, the spark.<br>Second Lord<br>O, 'tis brave wars!<br>PAROLLES<br>Most admirable: I have seen those wars.<br>BERTRAM<br>I am commanded here, and kept a coil with<br>'Too young' and 'the next year' and ''tis too early.'<br>PAROLLES<br>An"
  },
  {
    word: "advertising",
    context: "rd, I am more amazed at his dishonour<br>Than at the strangeness of it.<br>DUKE VINCENTIO<br>Come hither, Isabel.<br>Your friar is now your prince: as I was then<br>Advertising and holy to your business,<br>Not changing heart with habit, I am still<br>Attorney'd at your service.<br>ISABELLA<br>O, give me pardon,<br>That I, your "
  },
  {
    word: "aerial",
    context: "er. Let's to the seaside, ho!<br>As well to see the vessel that's come in<br>As to throw out our eyes for brave Othello,<br>Even till we make the main and the aerial blue<br>An indistinct regard.<br>Third Gentleman<br>Come, let's do so:<br>For every minute is expectancy<br>Of more arrivance.<br>Enter CASSIO<br><br>CASSIO<br>Thanks, yo"
  },
  {
    word: "alligator",
    context: "with overwhelming brows,<br>Culling of simples; meagre were his looks,<br>Sharp misery had worn him to the bones:<br>And in his needy shop a tortoise hung,<br>An alligator stuff'd, and other skins<br>Of ill-shaped fishes; and about his shelves<br>A beggarly account of empty boxes,<br>Green earthen pots, bladders and mus"
  },
  {
    word: "amazement",
    context: "erchance entering<br>into some monastery; but, by chance, nothing of what<br>is writ. Look, the unfolding star calls up the<br>shepherd. Put not yourself into amazement how these<br>things should be: all difficulties are but easy<br>when they are known. Call your executioner, and off<br>with Barnardine's head: I will"
  },
  {
    word: "anchovy",
    context: ""
  },
  {
    word: "apostrophe",
    context: ""
  },
  {
    word: "arch-villain",
    context: "ff on the ground,<br>May seem as shy, as grave, as just, as absolute<br>As Angelo; even so may Angelo,<br>In all his dressings, characts, titles, forms,<br>Be an arch-villain; believe it, royal prince:<br>If he be less, he's nothing; but he's more,<br>Had I more name for badness.<br>DUKE VINCENTIO<br>By mine honesty,<br>If sh"
  },
  {
    word: "assassination",
    context: "dishes and service, and pass over the stage. Then enter MACBETH<br>MACBETH<br>If it were done when 'tis done, then 'twere well<br>It were done quickly: if the assassination<br>Could trammel up the consequence, and catch<br>With his surcease success; that but this blow<br>Might be the be-all and the end-all here,<br>But "
  },
  {
    word: "auspicious",
    context: "e'll strive to bear it for your worthy sake<br>To the extreme edge of hazard.<br>DUKE<br>Then go thou forth;<br>And fortune play upon thy prosperous helm,<br>As thy auspicious mistress!<br>BERTRAM<br>This very day,<br>Great Mars, I put myself into thy file:<br>Make me but like my thoughts, and I shall prove<br>A lover of thy dru"
  },
  {
    word: "bachelorship",
    context: "t, out! My lords, an please you, 'tis not so;<br>I did beget her, all the parish knows:<br>Her mother liveth yet, can testify<br>She was the first fruit of my bachelorship.<br>WARWICK<br>Graceless! wilt thou deny thy parentage?<br>YORK<br>This argues what her kind of life hath been,<br>Wicked and vile; and so her death con"
  },
  {
    word: "backing",
    context: "uld give a thousand pound I<br>could run as fast as thou canst. You are straight<br>enough in the shoulders, you care not who sees your<br>back: call you that backing of your friends? A<br>plague upon such backing! give me them that will<br>face me. Give me a cup of sack: I am a rogue, if I<br>drunk to-day.<br>PRINCE HE"
  },
  {
    word: "bandit",
    context: "e.<br>SUFFOLK<br>Come, soldiers, show what cruelty ye can,<br>That this my death may never be forgot!<br>Great men oft die by vile bezonians:<br>A Roman sworder and banditto slave<br>Murder'd sweet Tully; Brutus' bastard hand<br>Stabb'd Julius Caesar; savage islanders<br>Pompey the Great; and Suffolk dies by pirates.<br>Exeun"
  },
  {
    word: "barefaced",
    context: " life?<br>Nature is fine in love, and where 'tis fine,<br>It sends some precious instance of itself<br>After the thing it loves.<br>OPHELIA<br>[Sings]<br>They bore him barefaced on the bier;<br>Hey non nonny, nonny, hey nonny;<br>And in his grave rain'd many a tear:--<br>Fare you well, my dove!<br>LAERTES<br>Hadst thou thy wits, an"
  },
  {
    word: "baseless",
    context: " cheerful, sir.<br>Our revels now are ended. These our actors,<br>As I foretold you, were all spirits and<br>Are melted into air, into thin air:<br>And, like the baseless fabric of this vision,<br>The cloud-capp'd towers, the gorgeous palaces,<br>The solemn temples, the great globe itself,<br>Ye all which it inherit, sh"
  },
  {
    word: "beached",
    context: "ies of jealousy:<br>And never, since the middle summer's spring,<br>Met we on hill, in dale, forest or mead,<br>By paved fountain or by rushy brook,<br>Or in the beached margent of the sea,<br>To dance our ringlets to the whistling wind,<br>But with thy brawls thou hast disturb'd our sport.<br>Therefore the winds, pipin"
  },
  {
    word: "bedazzled",
    context: " is a man, old, wrinkled, faded, wither'd,<br>And not a maiden, as thou say'st he is.<br>KATHARINA<br>Pardon, old father, my mistaking eyes,<br>That have been so bedazzled with the sun<br>That everything I look on seemeth green:<br>Now I perceive thou art a reverend father;<br>Pardon, I pray thee, for my mad mistaking.<br>"
  },
  {
    word: "bedroom",
    context: ""
  },
  {
    word: "belongings",
    context: "w your pleasure.<br>DUKE VINCENTIO<br>Angelo,<br>There is a kind of character in thy life,<br>That to the observer doth thy history<br>Fully unfold. Thyself and thy belongings<br>Are not thine own so proper as to waste<br>Thyself upon thy virtues, they on thee.<br>Heaven doth with us as we with torches do,<br>Not light them f"
  },
  {
    word: "birthplace",
    context: ""
  },
  {
    word: "bloodstained",
    context: "ift Severn's flood;<br>Who then, affrighted with their bloody looks,<br>Ran fearfully among the trembling reeds,<br>And hid his crisp head in the hollow bank,<br>Bloodstained with these valiant combatants.<br>Never did base and rotten policy<br>Colour her working with such deadly wounds;<br>Nor could the noble Mortimer<br>"
  },
  {
    word: "blusterer",
    context: ""
  },
  {
    word: "bold-faced",
    context: "y determined time thou gavest new date.<br>TALBOT<br>When from the Dauphin's crest thy sword struck fire,<br>It warm'd thy father's heart with proud desire<br>Of bold-faced victory. Then leaden age,<br>Quicken'd with youthful spleen and warlike rage,<br>Beat down Alencon, Orleans, Burgundy,<br>And from the pride of Gall"
  },
  {
    word: "bottled",
    context: "H<br>Thus have you breathed your curse against yourself.<br>QUEEN MARGARET<br>Poor painted queen, vain flourish of my fortune!<br>Why strew'st thou sugar on that bottled spider,<br>Whose deadly web ensnareth thee about?<br>Fool, fool! thou whet'st a knife to kill thyself.<br>The time will come when thou shalt wish for m"
  },
  {
    word: "bump",
    context: "ry.<br>Knocking within<br><br>Look who's at door there, ho! who knocks?<br>Exit DAVY<br><br>FALSTAFF<br>Why, now you have done me right.<br>To SILENCE, seeing him take off a bumper<br><br>SILENCE<br>[Singing]<br>Do me right,<br>And dub me knight: Samingo.<br>Is't not so?<br>FALSTAFF<br>'Tis so.<br>SILENCE<br>Is't so? Why then, say an old man can do som"
  },
  {
    word: "buzzer",
    context: "ts:<br>Last, and as much containing as all these,<br>Her brother is in secret come from France;<br>Feeds on his wonder, keeps himself in clouds,<br>And wants not buzzers to infect his ear<br>With pestilent speeches of his father's death;<br>Wherein necessity, of matter beggar'd,<br>Will nothing stick our person to arrai"
  },
  {
    word: "circumstantial",
    context: "<br>is called the Reproof Valiant. If again 'it was not<br>well cut,' he would say I lied: this is called the<br>Counter-cheque Quarrelsome: and so to the Lie<br>Circumstantial and the Lie Direct.<br>JAQUES<br>And how oft did you say his beard was not well cut?<br>TOUCHSTONE<br>I durst go no further than the Lie Circumstan"
  },
  {
    word: "clangor",
    context: "l is in. Pistol speaks nought but truth.<br>FALSTAFF<br>I will deliver her.<br>Shouts within, and the trumpets sound<br><br>PISTOL<br>There roar'd the sea, and trumpet-clangor sounds.<br>Enter KING HENRY V and his train, the Lord Chief- Justice among them<br><br>FALSTAFF<br>God save thy grace, King Hal! my royal Hal!<br>PISTOL<br>The "
  },
  {
    word: "cold-blooded",
    context: " thee safety! thou art perjured too,<br>And soothest up greatness. What a fool art thou,<br>A ramping fool, to brag and stamp and swear<br>Upon my party! Thou cold-blooded slave,<br>Hast thou not spoke like thunder on my side,<br>Been sworn my soldier, bidding me depend<br>Upon thy stars, thy fortune and thy strength"
  },
  {
    word: "coldhearted",
    context: ""
  },
  {
    word: "compact",
    context: ";<br>For I can no where find him like a man.<br>First Lord<br>My lord, he is but even now gone hence:<br>Here was he merry, hearing of a song.<br>DUKE SENIOR<br>If he, compact of jars, grow musical,<br>We shall have shortly discord in the spheres.<br>Go, seek him: tell him I would speak with him.<br>Enter JAQUES<br><br>First Lord<br>H"
  },
  {
    word: "consanguineous",
    context: "ut of doors, never trust me.<br>SIR TOBY BELCH<br>My lady's a Cataian, we are politicians, Malvolio's<br>a Peg-a-Ramsey, and 'Three merry men be we.' Am not<br>I consanguineous? am I not of her blood?<br>Tillyvally. Lady!<br>Sings<br><br>'There dwelt a man in Babylon, lady, lady!'<br>Clown<br>Beshrew me, the knight's in admirabl"
  },
  {
    word: "control",
    context: "under heaven's eye<br>But hath his bound, in earth, in sea, in sky:<br>The beasts, the fishes, and the winged fowls,<br>Are their males' subjects and at their controls:<br>Men, more divine, the masters of all these,<br>Lords of the wide world and wild watery seas,<br>Indued with intellectual sense and souls,<br>Of more "
  },
  {
    word: "countless",
    context: "des,<br>With golden fruit, but dangerous to be touch'd;<br>For death-like dragons here affright thee hard:<br>Her face, like heaven, enticeth thee to view<br>Her countless glory, which desert must gain;<br>And which, without desert, because thine eye<br>Presumes to reach, all thy whole heap must die.<br>Yon sometimes fa"
  },
  {
    word: "courtship",
    context: "ROSALIND<br>I have been told so of many: but indeed an old<br>religious uncle of mine taught me to speak, who was<br>in his youth an inland man; one that knew courtship<br>too well, for there he fell in love. I have heard<br>him read many lectures against it, and I thank God<br>I am not a woman, to be touched with so"
  },
  {
    word: "critic",
    context: "l do it sir, in print. Gardon! Remuneration!<br>Exit<br><br>BIRON<br>And I, forsooth, in love! I, that have been love's whip;<br>A very beadle to a humorous sigh;<br>A critic, nay, a night-watch constable;<br>A domineering pedant o'er the boy;<br>Than whom no mortal so magnificent!<br>This whimpled, whining, purblind, wayward"
  },
  {
    word: "critical",
    context: "es came last a conqueror.<br>Reads<br><br>'The thrice three Muses mourning for the death<br>Of Learning, late deceased in beggary.'<br>That is some satire, keen and critical,<br>Not sorting with a nuptial ceremony.<br>Reads<br><br>'A tedious brief scene of young Pyramus<br>And his love Thisbe; very tragical mirth.'<br>Merry and tra"
  },
  {
    word: "cruelhearted",
    context: ""
  },
  {
    word: "Dalmatians",
    context: "<br>Much under him; of him I gather'd honour;<br>Which he to seek of me again, perforce,<br>Behoves me keep at utterance. I am perfect<br>That the Pannonians and Dalmatians for<br>Their liberties are now in arms; a precedent<br>Which not to read would show the Britons cold:<br>So Caesar shall not find them.<br>CAIUS LUCIUS"
  },
  {
    word: "dauntless",
    context: "NG LEWIS XI<br>Whate'er it be, be thou still like thyself,<br>And sit thee by our side:<br>Seats her by him<br><br>Yield not thy neck<br>To fortune's yoke, but let thy dauntless mind<br>Still ride in triumph over all mischance.<br>Be plain, Queen Margaret, and tell thy grief;<br>It shall be eased, if France can yield relief.<br>"
  },
  {
    word: "dawn",
    context: "leaf's turn'd down<br>Where Philomel gave up. I have enough:<br>To the trunk again, and shut the spring of it.<br>Swift, swift, you dragons of the night, that dawning<br>May bare the raven's eye! I lodge in fear;<br>Though this a heavenly angel, hell is here.<br>Clock strikes<br><br>One, two, three: time, time!<br>Goes into t"
  },
  {
    word: "day's work",
    context: "asp: return he cannot, nor<br>Continue where he is: to shift his being<br>Is to exchange one misery with another,<br>And every day that comes comes to decay<br>A day's work in him. What shalt thou expect,<br>To be depender on a thing that leans,<br>Who cannot be new built, nor has no friends,<br>So much as but to prop h"
  },
  {
    word: "deafening",
    context: "rges,<br>Which wash both heaven and hell; and thou, that hast<br>Upon the winds command, bind them in brass,<br>Having call'd them from the deep! O, still<br>Thy deafening, dreadful thunders; gently quench<br>Thy nimble, sulphurous flashes! O, how, Lychorida,<br>How does my queen? Thou stormest venomously;<br>Wilt thou "
  },
  {
    word: "depository",
    context: ""
  },
  {
    word: "design",
    context: "l.<br>Exit<br><br>HELENA<br>Our remedies oft in ourselves do lie,<br>Which we ascribe to heaven: the fated sky<br>Gives us free scope, only doth backward pull<br>Our slow designs when we ourselves are dull.<br>What power is it which mounts my love so high,<br>That makes me see, and cannot feed mine eye?<br>The mightiest space in"
  },
  {
    word: "dexterously",
    context: "<br>facit monachum; that's as much to say as I wear not<br>motley in my brain. Good madonna, give me leave to<br>prove you a fool.<br>OLIVIA<br>Can you do it?<br>Clown<br>Dexterously, good madonna.<br>OLIVIA<br>Make your proof.<br>Clown<br>I must catechise you for it, madonna: good my mouse<br>of virtue, answer me.<br>OLIVIA<br>Well, sir, f"
  },
  {
    word: "dialogue",
    context: "ture hence, it requires haste of<br>your lordship.<br>BERTRAM<br>I mean, the business is not ended, as fearing to<br>hear of it hereafter. But shall we have this<br>dialogue between the fool and the soldier? Come,<br>bring forth this counterfeit module, he has deceived<br>me, like a double-meaning prophesier.<br>Second Lor"
  },
  {
    word: "discontent",
    context: "inform your father.<br>IMOGEN<br>Your mother too:<br>She's my good lady, and will conceive, I hope,<br>But the worst of me. So, I leave you, sir,<br>To the worst of discontent.<br>Exit<br><br>CLOTEN<br>I'll be revenged:<br>'His meanest garment!' Well.<br>Exit<br><br>CYMBELINE<br>SCENE IV. Rome. Philario's house.<br><br>Enter POSTHUMUS and PHILARI"
  },
  {
    word: "disgraceful",
    context: "would call forth their flowing tides.<br>BEDFORD<br>Me they concern; Regent I am of France.<br>Give me my steeled coat. I'll fight for France.<br>Away with these disgraceful wailing robes!<br>Wounds will I lend the French instead of eyes,<br>To weep their intermissive miseries.<br>Enter to them another Messenger<br><br>Messen"
  },
  {
    word: "dishearten",
    context: "ut of doubt, be of the same relish<br>as ours are: yet, in reason, no man should possess<br>him with any appearance of fear, lest he, by showing<br>it, should dishearten his army.<br>BATES<br>He may show what outward courage he will; but I<br>believe, as cold a night as 'tis, he could wish<br>himself in Thames up to the"
  },
  {
    word: "distasteful",
    context: " not--<br>Something hath been amiss--a noble nature<br>May catch a wrench--would all were well--'tis pity;--<br>And so, intending other serious matters,<br>After distasteful looks and these hard fractions,<br>With certain half-caps and cold-moving nods<br>They froze me into silence.<br>TIMON<br>You gods, reward them!<br>Prith"
  },
  {
    word: "distracted",
    context: " BERTRAM<br><br>LAFEU<br>He looks well on't.<br>KING<br>I am not a day of season,<br>For thou mayst see a sunshine and a hail<br>In me at once: but to the brightest beams<br>Distracted clouds give way; so stand thou forth;<br>The time is fair again.<br>BERTRAM<br>My high-repented blames,<br>Dear sovereign, pardon to me.<br>KING<br>All is wh"
  },
  {
    word: "divest",
    context: "train<br><br>KING OF FRANCE<br>From our brother England?<br>EXETER<br>From him; and thus he greets your majesty.<br>He wills you, in the name of God Almighty,<br>That you divest yourself, and lay apart<br>The borrow'd glories that by gift of heaven,<br>By law of nature and of nations, 'long<br>To him and to his heirs; namely, th"
  },
  {
    word: "domineering",
    context: "ion!<br>Exit<br><br>BIRON<br>And I, forsooth, in love! I, that have been love's whip;<br>A very beadle to a humorous sigh;<br>A critic, nay, a night-watch constable;<br>A domineering pedant o'er the boy;<br>Than whom no mortal so magnificent!<br>This whimpled, whining, purblind, wayward boy;<br>This senior-junior, giant-dwarf, D"
  },
  {
    word: "downstairs",
    context: ", anon, sir.<br>Exit<br><br>PRINCE HENRY<br>That ever this fellow should have fewer words than a<br>parrot, and yet the son of a woman! His industry is<br>upstairs and downstairs; his eloquence the parcel of<br>a reckoning. I am not yet of Percy's mind, the<br>Hotspur of the north; he that kills me some six or<br>seven dozen "
  },
  {
    word: "droplet",
    context: "ere thy gait.'<br>These well express in thee thy latter spirits:<br>Though thou abhorr'dst in us our human griefs,<br>Scorn'dst our brain's flow and those our<br>droplets which<br>From niggard nature fall, yet rich conceit<br>Taught thee to make vast Neptune weep for aye<br>On thy low grave, on faults forgiven. Dead<br>Is "
  },
  {
    word: "embrace",
    context: "m courtly friends, with camping foes to live,<br>Where death and danger dogs the heels of worth:<br>He is too good and fair for death and me:<br>Whom I myself embrace, to set him free.<br>COUNTESS<br>Ah, what sharp stings are in her mildest words!<br>Rinaldo, you did never lack advice so much,<br>As letting her pass so:"
  },
  {
    word: "employer",
    context: ",<br>That sits above,<br>And knows me, and knows me,<br>How pitiful I deserve,--<br>I mean in singing; but in loving, Leander the good<br>swimmer, Troilus the first employer of panders, and<br>a whole bookful of these quondam carpet-mangers,<br>whose names yet run smoothly in the even road of a<br>blank verse, why, they we"
  },
  {
    word: "employment",
    context: "<br>And urge her to a present answer back:<br>Commend me to my kinsmen and my son:<br>This is not much.<br>Clown<br>Not much commendation to them.<br>COUNTESS<br>Not much employment for you: you understand me?<br>Clown<br>Most fruitfully: I am there before my legs.<br>COUNTESS<br>Haste you again.<br>Exeunt severally<br><br>SCENE III. Paris."
  },
  {
    word: "engagement",
    context: "this noble wife!<br>Knocking within<br><br>Hark, hark! one knocks: Portia, go in awhile;<br>And by and by thy bosom shall partake<br>The secrets of my heart.<br>All my engagements I will construe to thee,<br>All the charactery of my sad brows:<br>Leave me with haste.<br>Exit PORTIA<br><br>Lucius, who's that knocks?<br>Re-enter LUCIUS "
  },
  {
    word: "enrapt",
    context: "RIAM<br>Come, Hector, come, go back:<br>Thy wife hath dream'd; thy mother hath had visions;<br>Cassandra doth foresee; and I myself<br>Am like a prophet suddenly enrapt<br>To tell thee that this day is ominous:<br>Therefore, come back.<br>HECTOR<br>AEneas is a-field;<br>And I do stand engaged to many Greeks,<br>Even in the faith"
  },
  {
    word: "enthroned",
    context: "force of temporal power,<br>The attribute to awe and majesty,<br>Wherein doth sit the dread and fear of kings;<br>But mercy is above this sceptred sway;<br>It is enthroned in the hearts of kings,<br>It is an attribute to God himself;<br>And earthly power doth then show likest God's<br>When mercy seasons justice. Therefo"
  },
  {
    word: "epileptic",
    context: "<br>Renege, affirm, and turn their halcyon beaks<br>With every gale and vary of their masters,<br>Knowing nought, like dogs, but following.<br>A plague upon your epileptic visage!<br>Smile you my speeches, as I were a fool?<br>Goose, if I had you upon Sarum plain,<br>I'ld drive ye cackling home to Camelot.<br>CORNWALL<br>Why,"
  },
  {
    word: "equivocal",
    context: ", sir, as a gentleman loves a woman.<br>KING<br>How is that?<br>PAROLLES<br>He loved her, sir, and loved her not.<br>KING<br>As thou art a knave, and no knave. What an<br>equivocal companion is this!<br>PAROLLES<br>I am a poor man, and at your majesty's command.<br>LAFEU<br>He's a good drum, my lord, but a naughty orator.<br>DIANA<br>Do "
  },
  {
    word: "eventful",
    context: "runk shank; and his big manly voice,<br>Turning again toward childish treble, pipes<br>And whistles in his sound. Last scene of all,<br>That ends this strange eventful history,<br>Is second childishness and mere oblivion,<br>Sans teeth, sans eyes, sans taste, sans everything.<br>Re-enter ORLANDO, with ADAM<br><br>DUKE SENI"
  },
  {
    word: "excitement",
    context: "een.' And in this fashion,<br>All our abilities, gifts, natures, shapes,<br>Severals and generals of grace exact,<br>Achievements, plots, orders, preventions,<br>Excitements to the field, or speech for truce,<br>Success or loss, what is or is not, serves<br>As stuff for these two to make paradoxes.<br>NESTOR<br>And in the "
  },
  {
    word: "expedience",
    context: "o:<br>Therefore we meet not now. Then let me hear<br>Of you, my gentle cousin Westmoreland,<br>What yesternight our council did decree<br>In forwarding this dear expedience.<br>WESTMORELAND<br>My liege, this haste was hot in question,<br>And many limits of the charge set down<br>But yesternight: when all athwart there came"
  },
  {
    word: "exposure",
    context: "ld as an oracle, and sets Thersites,<br>A slave whose gall coins slanders like a mint,<br>To match us in comparisons with dirt,<br>To weaken and discredit our exposure,<br>How rank soever rounded in with danger.<br>ULYSSES<br>They tax our policy, and call it cowardice,<br>Count wisdom as no member of the war,<br>Forestall "
  },
  {
    word: "eyeball",
    context: "fe,<br>I think she means to tangle my eyes too!<br>No, faith, proud mistress, hope not after it:<br>'Tis not your inky brows, your black silk hair,<br>Your bugle eyeballs, nor your cheek of cream,<br>That can entame my spirits to your worship.<br>You foolish shepherd, wherefore do you follow her,<br>Like foggy south puf"
  },
  {
    word: "eyedrops",
    context: ""
  },
  {
    word: "eyesore",
    context: ""
  },
  {
    word: "fanged",
    context: ""
  },
  {
    word: "far-off",
    context: "olent of late he is become,<br>How proud, how peremptory, and unlike himself?<br>We know the time since he was mild and affable,<br>And if we did but glance a far-off look,<br>Immediately he was upon his knee,<br>That all the court admired him for submission:<br>But meet him now, and, be it in the morn,<br>When every on"
  },
  {
    word: "farmhouse",
    context: "sore<br>between that and my blood.<br>CORNWALL<br>I will lay trust upon thee; and thou shalt find a<br>dearer father in my love.<br>Exeunt<br><br>SCENE VI. A chamber in a farmhouse adjoining the castle.<br><br>Enter GLOUCESTER, KING LEAR, KENT, Fool, and EDGAR<br>GLOUCESTER<br>Here is better than the open air; take it<br>thankfully. I"
  },
  {
    word: "fashionable",
    context: "nt to the abject rear,<br>O'er-run and trampled on: then what they do in present,<br>Though less than yours in past, must o'ertop yours;<br>For time is like a fashionable host<br>That slightly shakes his parting guest by the hand,<br>And with his arms outstretch'd, as he would fly,<br>Grasps in the comer: welcome eve"
  },
  {
    word: "fathomless",
    context: "<br>So great as our dread father in a scale<br>Of common ounces? will you with counters sum<br>The past proportion of his infinite?<br>And buckle in a waist most fathomless<br>With spans and inches so diminutive<br>As fears and reasons? fie, for godly shame!<br>HELENUS<br>No marvel, though you bite so sharp at reasons,<br>You"
  },
  {
    word: "fitful",
    context: "ead,<br>Whom we, to gain our peace, have sent to peace,<br>Than on the torture of the mind to lie<br>In restless ecstasy. Duncan is in his grave;<br>After life's fitful fever he sleeps well;<br>Treason has done his worst: nor steel, nor poison,<br>Malice domestic, foreign levy, nothing,<br>Can touch him further.<br>LADY MA"
  },
  {
    word: "fixture",
    context: " become nothing<br>else; nor that well neither.<br>FALSTAFF<br>By the Lord, thou art a traitor to say so: thou<br>wouldst make an absolute courtier; and the firm<br>fixture of thy foot would give an excellent motion<br>to thy gait in a semi-circled farthingale. I see<br>what thou wert, if Fortune thy foe were not, Natur"
  },
  {
    word: "flawed",
    context: ""
  },
  {
    word: "flowery",
    context: ", which I take to be<br>too little for pomp to enter: some that humble<br>themselves may; but the many will be too chill and<br>tender, and they'll be for the flowery way that<br>leads to the broad gate and the great fire.<br>LAFEU<br>Go thy ways, I begin to be aweary of thee; and I<br>tell thee so before, because I wou"
  },
  {
    word: "foppish",
    context: " away. If I speak<br>like myself in this, let him be whipped that first<br>finds it so.<br>Singing<br><br>Fools had ne'er less wit in a year;<br>For wise men are grown foppish,<br>They know not how their wits to wear,<br>Their manners are so apish.<br>KING LEAR<br>When were you wont to be so full of songs, sirrah?<br>Fool<br>I have us"
  },
  {
    word: "fortune-teller",
    context: "e<br>Of vile confederates. Along with them<br>They brought one Pinch, a hungry lean-faced villain,<br>A mere anatomy, a mountebank,<br>A threadbare juggler and a fortune-teller,<br>A needy, hollow-eyed, sharp-looking wretch,<br>A dead-looking man: this pernicious slave,<br>Forsooth, took on him as a conjurer,<br>And, gazin"
  },
  {
    word: "foul-mouthed",
    context: "their hearts are severed in<br>religion, their heads are both one; they may jowl<br>horns together, like any deer i' the herd.<br>COUNTESS<br>Wilt thou ever be a foul-mouthed and calumnious knave?<br>Clown<br>A prophet I, madam; and I speak the truth the next<br>way:<br>For I the ballad will repeat,<br>Which men full true sha"
  },
  {
    word: "freezing",
    context: "d we speak of<br>When we are old as you? when we shall hear<br>The rain and wind beat dark December, how,<br>In this our pinching cave, shall we discourse<br>The freezing hours away? We have seen nothing;<br>We are beastly, subtle as the fox for prey,<br>Like warlike as the wolf for what we eat;<br>Our valour is to chas"
  },
  {
    word: "frugal",
    context: "ame!--out of my<br>conversation, that he dares in this manner assay me?<br>Why, he hath not been thrice in my company! What<br>should I say to him? I was then frugal of my<br>mirth: Heaven forgive me! Why, I'll exhibit a bill<br>in the parliament for the putting down of men. How<br>shall I be revenged on him? for rev"
  },
  {
    word: "full-grown",
    context: ""
  },
  {
    word: "gallantry",
    context: "deeds? Why, they are vipers:<br>is love a generation of vipers? Sweet lord, who's<br>a-field to-day?<br>PARIS<br>Hector, Deiphobus, Helenus, Antenor, and all the<br>gallantry of Troy: I would fain have armed to-day,<br>but my Nell would not have it so. How chance my<br>brother Troilus went not?<br>HELEN<br>He hangs the lip at"
  },
  {
    word: "generous",
    context: "te the princess at her<br>pavilion in the posteriors of this day, which the<br>rude multitude call the afternoon.<br>HOLOFERNES<br>The posterior of the day, most generous sir, is<br>liable, congruent and measurable for the afternoon:<br>the word is well culled, chose, sweet and apt, I do<br>assure you, sir, I do assure."
  },
  {
    word: "gloomy",
    context: "E<br>Then lead me hence; with whom I leave my curse:<br>May never glorious sun reflex his beams<br>Upon the country where you make abode;<br>But darkness and the gloomy shade of death<br>Environ you, till mischief and despair<br>Drive you to break your necks or hang yourselves!<br>Exit, guarded<br><br>YORK<br>Break thou in piece"
  },
  {
    word: "glow",
    context: "hat was his mistress.<br>CELIA<br>Well, and what of him?<br>CORIN<br>If you will see a pageant truly play'd,<br>Between the pale complexion of true love<br>And the red glow of scorn and proud disdain,<br>Go hence a little and I shall conduct you,<br>If you will mark it.<br>ROSALIND<br>O, come, let us remove:<br>The sight of lovers "
  },
  {
    word: "gnarled",
    context: "r<br>Would use his heaven for thunder;<br>Nothing but thunder! Merciful Heaven,<br>Thou rather with thy sharp and sulphurous bolt<br>Split'st the unwedgeable and gnarled oak<br>Than the soft myrtle: but man, proud man,<br>Drest in a little brief authority,<br>Most ignorant of what he's most assured,<br>His glassy essence, "
  },
  {
    word: "go-between",
    context: "ess Ford, Master Brook; you shall want<br>none. I shall be with her, I may tell you, by her<br>own appointment; even as you came in to me, her<br>assistant or go-between parted from me: I say I<br>shall be with her between ten and eleven; for at<br>that time the jealous rascally knave her husband<br>will be forth. Co"
  },
  {
    word: "gust",
    context: "ey failing,<br>I must die much your debtor.<br>PHILARIO<br>Your very goodness and your company<br>O'erpays all I can do. By this, your king<br>Hath heard of great Augustus: Caius Lucius<br>Will do's commission throughly: and I think<br>He'll grant the tribute, send the arrearages,<br>Or look upon our Romans, whose remembra"
  },
  {
    word: "half-blooded",
    context: "reate thee here<br>My lord and master.<br>GONERIL<br>Mean you to enjoy him?<br>ALBANY<br>The let-alone lies not in your good will.<br>EDMUND<br>Nor in thine, lord.<br>ALBANY<br>Half-blooded fellow, yes.<br>REGAN<br>[To EDMUND] Let the drum strike, and prove my title thine.<br>ALBANY<br>Stay yet; hear reason. Edmund, I arrest thee<br>On capi"
  },
  {
    word: "hint",
    context: "IMO<br>All too soon I shall,<br>Unless thou wouldst grieve quickly. This Posthumus,<br>Most like a noble lord in love and one<br>That had a royal lover, took his hint;<br>And, not dispraising whom we praised,--therein<br>He was as calm as virtue--he began<br>His mistress' picture; which by his tongue<br>being made,<br>And the"
  },
  {
    word: "hob-nails",
    context: "s stinking mackerel.<br>PRINCE HENRY<br>Why, then, it is like, if there come a hot June and<br>this civil buffeting hold, we shall buy maidenheads<br>as they buy hob-nails, by the hundreds.<br>FALSTAFF<br>By the mass, lad, thou sayest true; it is like we<br>shall have good trading that way. But tell me, Hal,<br>art not tho"
  },
  {
    word: "hobnob",
    context: ""
  },
  {
    word: "homely",
    context: "TESS<br>Sir, I am a poor friend of yours, that loves you.<br>Clown<br>O Lord, sir! Thick, thick, spare not me.<br>COUNTESS<br>I think, sir, you can eat none of this homely meat.<br>Clown<br>O Lord, sir! Nay, put me to't, I warrant you.<br>COUNTESS<br>You were lately whipped, sir, as I think.<br>Clown<br>O Lord, sir! spare not me.<br>C"
  },
  {
    word: "honey-tongued",
    context: "is is the flower that smiles on every one,<br>To show his teeth as white as whale's bone;<br>And consciences, that will not die in debt,<br>Pay him the due of honey-tongued Boyet.<br>FERDINAND<br>A blister on his sweet tongue, with my heart,<br>That put Armado's page out of his part!<br>BIRON<br>See where it comes! Behavio"
  },
  {
    word: "hoodwinked",
    context: ""
  },
  {
    word: "hostile",
    context: "y I honour him.<br>If he suspect I may dishonour him:<br>And what may make him blush in being known,<br>He'll stop the course by which it might be known;<br>With hostile forces he'll o'erspread the land,<br>And with the ostent of war will look so huge,<br>Amazement shall drive courage from the state;<br>Our men be vanqu"
  },
  {
    word: "hot-blooded",
    context: "nt<br><br>SCENE V. Another part of the Park.<br><br>Enter FALSTAFF disguised as Herne<br>FALSTAFF<br>The Windsor bell hath struck twelve; the minute<br>draws on. Now, the hot-blooded gods assist me!<br>Remember, Jove, thou wast a bull for thy Europa; love<br>set on thy horns. O powerful love! that, in some<br>respects, makes a b"
  },
  {
    word: "housekeeping",
    context: "anopies,<br>Fine linen, Turkey cushions boss'd with pearl,<br>Valance of Venice gold in needlework,<br>Pewter and brass and all things that belong<br>To house or housekeeping: then, at my farm<br>I have a hundred milch-kine to the pail,<br>Sixscore fat oxen standing in my stalls,<br>And all things answerable to this por"
  },
  {
    word: "howl",
    context: "o you speak to, 'Why blame you me to love you?'<br>ORLANDO<br>To her that is not here, nor doth not hear.<br>ROSALIND<br>Pray you, no more of this; 'tis like the howling<br>of Irish wolves against the moon.<br>To SILVIUS<br><br>I will help you, if I can:<br>To PHEBE<br><br>I would love you, if I could. To-morrow meet me all togethe"
  },
  {
    word: "hunchbacked",
    context: ""
  },
  {
    word: "ill-tempered",
    context: ""
  },
  {
    word: "immediacy",
    context: "m.<br>Methinks our pleasure might have been demanded,<br>Ere you had spoke so far. He led our powers;<br>Bore the commission of my place and person;<br>The which immediacy may well stand up,<br>And call itself your brother.<br>GONERIL<br>Not so hot:<br>In his own grace he doth exalt himself,<br>More than in your addition.<br>REG"
  },
  {
    word: "impartial",
    context: "omes forward<br><br>Do you not smile at this, Lord Angelo?<br>O heaven, the vanity of wretched fools!<br>Give us some seats. Come, cousin Angelo;<br>In this I'll be impartial; be you judge<br>Of your own cause. Is this the witness, friar?<br>First, let her show her face, and after speak.<br>MARIANA<br>Pardon, my lord; I will "
  },
  {
    word: "import",
    context: "ed her.<br>PAROLLES<br>France is a dog-hole, and it no more merits<br>The tread of a man's foot: to the wars!<br>BERTRAM<br>There's letters from my mother: what the import is,<br>I know not yet.<br>PAROLLES<br>Ay, that would be known. To the wars, my boy, to the wars!<br>He wears his honour in a box unseen,<br>That hugs his kick"
  },
  {
    word: "importantly",
    context: "ying us.<br>ARVIRAGUS<br>It is not likely<br>That when they hear the Roman horses neigh,<br>Behold their quarter'd fires, have both their eyes<br>And ears so cloy'd importantly as now,<br>That they will waste their time upon our note,<br>To know from whence we are.<br>BELARIUS<br>O, I am known<br>Of many in the army: many years,"
  },
  {
    word: "in question",
    context: "eeing you should love<br>her? and loving woo? and, wooing, she should<br>grant? and will you persever to enjoy her?<br>OLIVER<br>Neither call the giddiness of it in question, the<br>poverty of her, the small acquaintance, my sudden<br>wooing, nor her sudden consenting; but say with me,<br>I love Aliena; say with her tha"
  },
  {
    word: "inaudible",
    context: "KING<br>All is whole;<br>Not one word more of the consumed time.<br>Let's take the instant by the forward top;<br>For we are old, and on our quick'st decrees<br>The inaudible and noiseless foot of Time<br>Steals ere we can effect them. You remember<br>The daughter of this lord?<br>BERTRAM<br>Admiringly, my liege, at first<br>I s"
  },
  {
    word: "inauspicious",
    context: " night<br>Depart again: here, here will I remain<br>With worms that are thy chamber-maids; O, here<br>Will I set up my everlasting rest,<br>And shake the yoke of inauspicious stars<br>From this world-wearied flesh. Eyes, look your last!<br>Arms, take your last embrace! and, lips, O you<br>The doors of breath, seal with "
  },
  {
    word: "indistinguishable",
    context: "LUS<br>Why thou damnable box of envy, thou, what meanest<br>thou to curse thus?<br>THERSITES<br>Do I curse thee?<br>PATROCLUS<br>Why no, you ruinous butt, you whoreson<br>indistinguishable cur, no.<br>THERSITES<br>No! why art thou then exasperate, thou idle<br>immaterial skein of sleave-silk, thou green sarcenet<br>flap for a sore "
  },
  {
    word: "inducement",
    context: " it not?<br>First Gentleman<br>Ay, my good lady, he.<br>COUNTESS<br>A very tainted fellow, and full of wickedness.<br>My son corrupts a well-derived nature<br>With his inducement.<br>First Gentleman<br>Indeed, good lady,<br>The fellow has a deal of that too much,<br>Which holds him much to have.<br>COUNTESS<br>You're welcome, gentleme"
  },
  {
    word: "investment",
    context: "ee is by a civil peace maintained,<br>Whose beard the silver hand of peace hath touch'd,<br>Whose learning and good letters peace hath tutor'd,<br>Whose white investments figure innocence,<br>The dove and very blessed spirit of peace,<br>Wherefore do you so ill translate ourself<br>Out of the speech of peace that bea"
  },
  {
    word: "invitation",
    context: "ste; I am about<br>thrift. Briefly, I do mean to make love to Ford's<br>wife: I spy entertainment in her; she discourses,<br>she carves, she gives the leer of invitation: I<br>can construe the action of her familiar style; and<br>the hardest voice of her behavior, to be Englished<br>rightly, is, 'I am Sir John Falsta"
  },
  {
    word: "invulnerable",
    context: "Wound the loud winds, or with bemock'd-at stabs<br>Kill the still-closing waters, as diminish<br>One dowle that's in my plume: my fellow-ministers<br>Are like invulnerable. If you could hurt,<br>Your swords are now too massy for your strengths<br>And will not be uplifted. But remember--<br>For that's my business to y"
  },
  {
    word: "jaded",
    context: "was never slain, as thou shalt be.<br>SUFFOLK<br>Obscure and lowly swain, King Henry's blood,<br>The honourable blood of Lancaster,<br>Must not be shed by such a jaded groom.<br>Hast thou not kiss'd thy hand and held my stirrup?<br>Bare-headed plodded by my foot-cloth mule<br>And thought thee happy when I shook my head?"
  },
  {
    word: "Judgement Day",
    context: ""
  },
  {
    word: "juiced",
    context: "the sun advance his burning eye,<br>The day to cheer and night's dank dew to dry,<br>I must up-fill this osier cage of ours<br>With baleful weeds and precious-juiced flowers.<br>The earth that's nature's mother is her tomb;<br>What is her burying grave that is her womb,<br>And from her womb children of divers kind<br>We"
  },
  {
    word: "kissing",
    context: "E<br>And I mine. I remember, when I was in love I broke<br>my sword upon a stone and bid him take that for<br>coming a-night to Jane Smile; and I remember the<br>kissing of her batlet and the cow's dugs that her<br>pretty chopt hands had milked; and I remember the<br>wooing of a peascod instead of her, from whom I to"
  },
  {
    word: "lackluster",
    context: ""
  },
  {
    word: "ladybird",
    context: "se<br>LADY CAPULET<br>Nurse, where's my daughter? call her forth to me.<br>Nurse<br>Now, by my maidenhead, at twelve year old,<br>I bade her come. What, lamb! what, ladybird!<br>God forbid! Where's this girl? What, Juliet!<br>Enter JULIET<br><br>JULIET<br>How now! who calls?<br>Nurse<br>Your mother.<br>JULIET<br>Madam, I am here.<br>What is yo"
  },
  {
    word: "laughable",
    context: "augh like parrots at a bag-piper,<br>And other of such vinegar aspect<br>That they'll not show their teeth in way of smile,<br>Though Nestor swear the jest be laughable.<br>Enter BASSANIO, LORENZO, and GRATIANO<br><br>SALANIO<br>Here comes Bassanio, your most noble kinsman,<br>Gratiano and Lorenzo. Fare ye well:<br>We leave y"
  },
  {
    word: "leaky",
    context: "maker!<br>We are less afraid to be drowned than thou art.<br>GONZALO<br>I'll warrant him for drowning; though the ship were<br>no stronger than a nutshell and as leaky as an<br>unstanched wench.<br>Boatswain<br>Lay her a-hold, a-hold! set her two courses off to<br>sea again; lay her off.<br>Enter Mariners wet<br><br>Mariners<br>All lo"
  },
  {
    word: "leapfrog",
    context: ""
  },
  {
    word: "lonely",
    context: "INA<br>As she lived peerless,<br>So her dead likeness, I do well believe,<br>Excels whatever yet you look'd upon<br>Or hand of man hath done; therefore I keep it<br>Lonely, apart. But here it is: prepare<br>To see the life as lively mock'd as ever<br>Still sleep mock'd death: behold, and say 'tis well.<br>PAULINA draws a c"
  },
  {
    word: "long-legged",
    context: ""
  },
  {
    word: "love letter",
    context: "him?<br>LAUNCE<br>Thou must run to him, for thou hast stayed so long<br>that going will scarce serve the turn.<br>SPEED<br>Why didst not tell me sooner? pox of your love letters!<br>Exit<br><br>LAUNCE<br>Now will he be swinged for reading my letter; an<br>unmannerly slave, that will thrust himself into<br>secrets! I'll after, to re"
  },
  {
    word: "luggage",
    context: "culo; by this hand, I'll have<br>that gown.<br>TRINCULO<br>Thy grace shall have it.<br>CALIBAN<br>The dropsy drown this fool I what do you mean<br>To dote thus on such luggage? Let's alone<br>And do the murder first: if he awake,<br>From toe to crown he'll fill our skins with pinches,<br>Make us strange stuff.<br>STEPHANO<br>Be you"
  },
  {
    word: "lustrous",
    context: " tortured body.<br>First Lord<br>Farewell, captain.<br>Second Lord<br>Sweet Monsieur Parolles!<br>PAROLLES<br>Noble heroes, my sword and yours are kin. Good<br>sparks and lustrous, a word, good metals: you shall<br>find in the regiment of the Spinii one Captain<br>Spurio, with his cicatrice, an emblem of war, here<br>on his sini"
  },
  {
    word: "madcap",
    context: "r will, sir, or so.<br>BIRON<br>You are welcome, sir: adieu.<br>BOYET<br>Farewell to me, sir, and welcome to you.<br>Exit BIRON<br><br>MARIA<br>That last is Biron, the merry madcap lord:<br>Not a word with him but a jest.<br>BOYET<br>And every jest but a word.<br>PRINCESS<br>It was well done of you to take him at his word.<br>BOYET<br>I was as"
  },
  {
    word: "majestic",
    context: "ine,<br>Personates thee: and thy lopp'd branches point<br>Thy two sons forth; who, by Belarius stol'n,<br>For many years thought dead, are now revived,<br>To the majestic cedar join'd, whose issue<br>Promises Britain peace and plenty.<br>CYMBELINE<br>Well<br>My peace we will begin. And, Caius Lucius,<br>Although the victor, w"
  },
  {
    word: "majestically",
    context: "nth?<br>PRINCE HENRY<br>Dost thou speak like a king? Do thou stand for me,<br>and I'll play my father.<br>FALSTAFF<br>Depose me? if thou dost it half so gravely, so<br>majestically, both in word and matter, hang me up by<br>the heels for a rabbit-sucker or a poulter's hare.<br>PRINCE HENRY<br>Well, here I am set.<br>FALSTAFF<br>And"
  },
  {
    word: "malignancy",
    context: "nd SEBASTIAN<br>ANTONIO<br>Will you stay no longer? nor will you not that I go with you?<br>SEBASTIAN<br>By your patience, no. My stars shine darkly over<br>me: the malignancy of my fate might perhaps<br>distemper yours; therefore I shall crave of you your<br>leave that I may bear my evils alone: it were a bad<br>recompens"
  },
  {
    word: "manager",
    context: "ot, the duello he regards<br>not: his disgrace is to be called boy; but his<br>glory is to subdue men. Adieu, valour! rust rapier!<br>be still, drum! for your manager is in love; yea,<br>he loveth. Assist me, some extemporal god of rhyme,<br>for I am sure I shall turn sonnet. Devise, wit;<br>write, pen; for I am for "
  },
  {
    word: "marketable",
    context: " news.<br>CELIA<br>Which he will put on us, as pigeons feed their young.<br>ROSALIND<br>Then shall we be news-crammed.<br>CELIA<br>All the better; we shall be the more marketable.<br>Enter LE BEAU<br><br>Bon jour, Monsieur Le Beau: what's the news?<br>LE BEAU<br>Fair princess, you have lost much good sport.<br>CELIA<br>Sport! of what col"
  },
  {
    word: "militarist",
    context: "way you will.<br>BERTRAM<br>All's one to him. What a past-saving slave is this!<br>First Lord<br>You're deceived, my lord: this is Monsieur<br>Parolles, the gallant militarist,--that was his own<br>phrase,--that had the whole theoric of war in the<br>knot of his scarf, and the practise in the chape of<br>his dagger.<br>Second"
  },
  {
    word: "mimic",
    context: "scene and enter'd in a brake<br>When I did him at this advantage take,<br>An ass's nole I fixed on his head:<br>Anon his Thisbe must be answered,<br>And forth my mimic comes. When they him spy,<br>As wild geese that the creeping fowler eye,<br>Or russet-pated choughs, many in sort,<br>Rising and cawing at the gun's repo"
  },
  {
    word: "misgiving",
    context: "ch him presently.<br>Exit<br><br>BRUTUS<br>I know that we shall have him well to friend.<br>CASSIUS<br>I wish we may: but yet have I a mind<br>That fears him much; and my misgiving still<br>Falls shrewdly to the purpose.<br>BRUTUS<br>But here comes Antony.<br>Re-enter ANTONY<br><br>Welcome, Mark Antony.<br>ANTONY<br>O mighty Caesar! dost thou "
  },
  {
    word: "misplaced",
    context: "d housewife Fortune from<br>her wheel, that her gifts may henceforth be bestowed equally.<br>ROSALIND<br>I would we could do so, for her benefits are<br>mightily misplaced, and the bountiful blind woman<br>doth most mistake in her gifts to women.<br>CELIA<br>'Tis true; for those that she makes fair she scarce<br>makes hone"
  },
  {
    word: "money's worth",
    context: " that sum, yet there remains unpaid<br>A hundred thousand more; in surety of the which,<br>One part of Aquitaine is bound to us,<br>Although not valued to the money's worth.<br>If then the king your father will restore<br>But that one half which is unsatisfied,<br>We will give up our right in Aquitaine,<br>And hold fair"
  },
  {
    word: "monumental",
    context: "d a young gentlewoman here in<br>Florence, of a most chaste renown; and this night he<br>fleshes his will in the spoil of her honour: he hath<br>given her his monumental ring, and thinks himself<br>made in the unchaste composition.<br>First Lord<br>Now, God delay our rebellion! as we are ourselves,<br>what things are we"
  },
  {
    word: "moonbeam",
    context: "xen thighs<br>And light them at the fiery glow-worm's eyes,<br>To have my love to bed and to arise;<br>And pluck the wings from Painted butterflies<br>To fan the moonbeams from his sleeping eyes:<br>Nod to him, elves, and do him courtesies.<br>PEASEBLOSSOM<br>Hail, mortal!<br>COBWEB<br>Hail!<br>MOTH<br>Hail!<br>MUSTARDSEED<br>Hail!<br>BOTTO"
  },
  {
    word: "mortifying",
    context: "sad one.<br>GRATIANO<br>Let me play the fool:<br>With mirth and laughter let old wrinkles come,<br>And let my liver rather heat with wine<br>Than my heart cool with mortifying groans.<br>Why should a man, whose blood is warm within,<br>Sit like his grandsire cut in alabaster?<br>Sleep when he wakes and creep into the jaund"
  },
  {
    word: "motionless",
    context: "the hides and hips,<br>The gum down-roping from their pale-dead eyes<br>And in their pale dull mouths the gimmal bit<br>Lies foul with chew'd grass, still and motionless;<br>And their executors, the knavish crows,<br>Fly o'er them, all impatient for their hour.<br>Description cannot suit itself in words<br>To demonstrat"
  },
  {
    word: "mountaineer",
    context: "at companies are near: pray you, away;<br>Let me alone with him.<br>Exeunt BELARIUS and ARVIRAGUS<br><br>CLOTEN<br>Soft! What are you<br>That fly me thus? some villain mountaineers?<br>I have heard of such. What slave art thou?<br>GUIDERIUS<br>A thing<br>More slavish did I ne'er than answering<br>A slave without a knock.<br>CLOTEN<br>Tho"
  },
  {
    word: "multitudinous",
    context: " on't, that prefer<br>A noble life before a long, and wish<br>To jump a body with a dangerous physic<br>That's sure of death without it, at once pluck out<br>The multitudinous tongue; let them not lick<br>The sweet which is their poison: your dishonour<br>Mangles true judgment and bereaves the state<br>Of that integrity"
  },
  {
    word: "neglect",
    context: " put I on the countenance<br>Of stern commandment. But whate'er you are<br>That in this desert inaccessible,<br>Under the shade of melancholy boughs,<br>Lose and neglect the creeping hours of time<br>If ever you have look'd on better days,<br>If ever been where bells have knoll'd to church,<br>If ever sat at any good ma"
  },
  {
    word: "new-fallen",
    context: ""
  },
  {
    word: "new-fangled",
    context: "<br>changes when they are wives. I will be more jealous<br>of thee than a Barbary cock-pigeon over his hen,<br>more clamorous than a parrot against rain, more<br>new-fangled than an ape, more giddy in my desires<br>than a monkey: I will weep for nothing, like Diana<br>in the fountain, and I will do that when you are<br>"
  },
  {
    word: "nimble-footed",
    context: "learn'd me how to brook this patiently.<br>Second Outlaw<br>Come, bring her away.<br>First Outlaw<br>Where is the gentleman that was with her?<br>Third Outlaw<br>Being nimble-footed, he hath outrun us,<br>But Moyses and Valerius follow him.<br>Go thou with her to the west end of the wood;<br>There is our captain: we'll follow"
  },
  {
    word: "noiseless",
    context: "ole;<br>Not one word more of the consumed time.<br>Let's take the instant by the forward top;<br>For we are old, and on our quick'st decrees<br>The inaudible and noiseless foot of Time<br>Steals ere we can effect them. You remember<br>The daughter of this lord?<br>BERTRAM<br>Admiringly, my liege, at first<br>I stuck my choice"
  },
  {
    word: "obscene",
    context: " when. Now for the ground which; which,<br>I mean, I walked upon: it is y-cleped thy park. Then<br>for the place where; where, I mean, I did encounter<br>that obscene and preposterous event, that draweth<br>from my snow-white pen the ebon-coloured ink, which<br>here thou viewest, beholdest, surveyest, or seest;<br>bu"
  },
  {
    word: "obsequiously",
    context: "ds to guard it; LADY ANNE being the mourner<br>LADY ANNE<br>Set down, set down your honourable load,<br>If honour may be shrouded in a hearse,<br>Whilst I awhile obsequiously lament<br>The untimely fall of virtuous Lancaster.<br>Poor key-cold figure of a holy king!<br>Pale ashes of the house of Lancaster!<br>Thou bloodless"
  },
  {
    word: "on purpose",
    context: "nce of his rage,<br>Is a mad tale he told to-day at dinner,<br>Of his own doors being shut against his entrance.<br>Belike his wife, acquainted with his fits,<br>On purpose shut the doors against his way.<br>My way is now to hie home to his house,<br>And tell his wife that, being lunatic,<br>He rush'd into my house and "
  },
  {
    word: "outbreak",
    context: "m,<br>That he is open to incontinency;<br>That's not my meaning: but breathe his faults so quaintly<br>That they may seem the taints of liberty,<br>The flash and outbreak of a fiery mind,<br>A savageness in unreclaimed blood,<br>Of general assault.<br>REYNALDO<br>But, my good lord,--<br>LORD POLONIUS<br>Wherefore should you do t"
  },
  {
    word: "over-cool",
    context: "man cannot make<br>him laugh; but that's no marvel, he drinks no wine.<br>There's never none of these demure boys come to any<br>proof; for thin drink doth so over-cool their blood,<br>and making many fish-meals, that they fall into a<br>kind of male green-sickness; and then when they<br>marry, they get wenches: they"
  },
  {
    word: "over-ripened",
    context: ""
  },
  {
    word: "over-weathered",
    context: ""
  },
  {
    word: "overgrowth",
    context: ""
  },
  {
    word: "overview",
    context: ""
  },
  {
    word: "pageantry",
    context: " sands are almost run;<br>More a little, and then dumb.<br>This, my last boon, give me,<br>For such kindness must relieve me,<br>That you aptly will suppose<br>What pageantry, what feats, what shows,<br>What minstrelsy, and pretty din,<br>The regent made in Mytilene<br>To greet the king. So he thrived,<br>That he is promised "
  },
  {
    word: "pale-faced",
    context: "ion of some great exploit<br>Drives him beyond the bounds of patience.<br>HOTSPUR<br>By heaven, methinks it were an easy leap,<br>To pluck bright honour from the pale-faced moon,<br>Or dive into the bottom of the deep,<br>Where fathom-line could never touch the ground,<br>And pluck up drowned honour by the locks;<br>So he "
  },
  {
    word: "pedant",
    context: "IRON<br>And I, forsooth, in love! I, that have been love's whip;<br>A very beadle to a humorous sigh;<br>A critic, nay, a night-watch constable;<br>A domineering pedant o'er the boy;<br>Than whom no mortal so magnificent!<br>This whimpled, whining, purblind, wayward boy;<br>This senior-junior, giant-dwarf, Dan Cupid;<br>Re"
  },
  {
    word: "perplex",
    context: "t is in thy mind,<br>That makes thee stare thus? Wherefore breaks that sigh<br>From the inward of thee? One, but painted thus,<br>Would be interpreted a thing perplex'd<br>Beyond self-explication: put thyself<br>Into a havior of less fear, ere wildness<br>Vanquish my staider senses. What's the matter?<br>Why tender'st t"
  },
  {
    word: "perusal",
    context: "IA<br>He took me by the wrist and held me hard;<br>Then goes he to the length of all his arm;<br>And, with his other hand thus o'er his brow,<br>He falls to such perusal of my face<br>As he would draw it. Long stay'd he so;<br>At last, a little shaking of mine arm<br>And thrice his head thus waving up and down,<br>He raise"
  },
  {
    word: "pious",
    context: "w to adore the heavens and bows you<br>To a morning's holy office: the gates of monarchs<br>Are arch'd so high that giants may jet through<br>And keep their impious turbans on, without<br>Good morrow to the sun. Hail, thou fair heaven!<br>We house i' the rock, yet use thee not so hardly<br>As prouder livers do.<br>GUIDE"
  },
  {
    word: "posture",
    context: "my fell,<br>And thus I set my foot on 's neck;' even then<br>The princely blood flows in his cheek, he sweats,<br>Strains his young nerves and puts himself in posture<br>That acts my words. The younger brother, Cadwal,<br>Once Arviragus, in as like a figure,<br>Strikes life into my speech and shows much more<br>His own "
  },
  {
    word: "premeditated",
    context: "hey mistake:<br>And what poor duty cannot do, noble respect<br>Takes it in might, not merit.<br>Where I have come, great clerks have purposed<br>To greet me with premeditated welcomes;<br>Where I have seen them shiver and look pale,<br>Make periods in the midst of sentences,<br>Throttle their practised accent in their f"
  },
  {
    word: "priceless",
    context: ""
  },
  {
    word: "Promethean",
    context: "the beauty of a woman's face?<br>From women's eyes this doctrine I derive; They are the ground, the books, the academes From whence doth spring the true Promethean fire<br><br>Why, universal plodding poisons up<br>The nimble spirits in the arteries,<br>As motion and long-during action tires<br>The sinewy vigour of th"
  },
  {
    word: "protester",
    context: "h you yet know not of.<br>And be not jealous on me, gentle Brutus:<br>Were I a common laugher, or did use<br>To stale with ordinary oaths my love<br>To every new protester; if you know<br>That I do fawn on men and hug them hard<br>And after scandal them, or if you know<br>That I profess myself in banqueting<br>To all the r"
  },
  {
    word: "published",
    context: "SOMERSET, with Attendants<br><br>KING HENRY VI<br>Go, call our uncle to our presence straight;<br>Say we intend to try his grace to-day.<br>If he be guilty, as 'tis published.<br>SUFFOLK<br>I'll call him presently, my noble lord.<br>Exit<br><br>KING HENRY VI<br>Lords, take your places; and, I pray you all,<br>Proceed no straiter 'gain"
  },
  {
    word: "puking",
    context: "ers:<br>They have their exits and their entrances;<br>And one man in his time plays many parts,<br>His acts being seven ages. At first the infant,<br>Mewling and puking in the nurse's arms.<br>And then the whining school-boy, with his satchel<br>And shining morning face, creeping like snail<br>Unwillingly to school. And"
  },
  {
    word: "puppy-dog",
    context: "rld: I will<br>verify as much in his beard: be has no more<br>directions in the true disciplines of the wars, look<br>you, of the Roman disciplines, than is a puppy-dog.<br>Enter MACMORRIS and Captain JAMY<br><br>GOWER<br>Here a' comes; and the Scots captain, Captain Jamy, with him.<br>FLUELLEN<br>Captain Jamy is a marvellous"
  },
  {
    word: "quarrelsome",
    context: " answer, I spake not true: this<br>is called the Reproof Valiant. If again 'it was not<br>well cut,' he would say I lied: this is called the<br>Counter-cheque Quarrelsome: and so to the Lie<br>Circumstantial and the Lie Direct.<br>JAQUES<br>And how oft did you say his beard was not well cut?<br>TOUCHSTONE<br>I durst go no "
  },
  {
    word: "questing",
    context: "lord; he's ever sending: how shall I thank<br>him, thinkest thou? And what has he sent now?<br>SERVILIUS<br>Has only sent his present occasion now, my lord;<br>requesting your lordship to supply his instant use<br>with so many talents.<br>LUCILIUS<br>I know his lordship is but merry with me;<br>He cannot want fifty five hu"
  },
  {
    word: "radiance",
    context: "no living, none,<br>If Bertram be away. 'Twere all one<br>That I should love a bright particular star<br>And think to wed it, he is so above me:<br>In his bright radiance and collateral light<br>Must I be comforted, not in his sphere.<br>The ambition in my love thus plagues itself:<br>The hind that would be mated by the"
  },
  {
    word: "rancorous",
    context: "nd all.<br>DUKE SOLINUS<br>Merchant of Syracuse, plead no more;<br>I am not partial to infringe our laws:<br>The enmity and discord which of late<br>Sprung from the rancorous outrage of your duke<br>To merchants, our well-dealing countrymen,<br>Who wanting guilders to redeem their lives<br>Have seal'd his rigorous statutes"
  },
  {
    word: "raw-boned",
    context: "me Edward the Third did reign.<br>More truly now may this be verified;<br>For none but Samsons and Goliases<br>It sendeth forth to skirmish. One to ten!<br>Lean, raw-boned rascals! who would e'er suppose<br>They had such courage and audacity?<br>CHARLES<br>Let's leave this town; for they are hare-brain'd slaves,<br>And hun"
  },
  {
    word: "reclusive",
    context: "f the lady's death<br>Will quench the wonder of her infamy:<br>And if it sort not well, you may conceal her,<br>As best befits her wounded reputation,<br>In some reclusive and religious life,<br>Out of all eyes, tongues, minds and injuries.<br>BENEDICK<br>Signior Leonato, let the friar advise you:<br>And though you know my"
  },
  {
    word: "reinforcement",
    context: "and Thoas deadly hurt,<br>Patroclus ta'en or slain, and Palamedes<br>Sore hurt and bruised: the dreadful Sagittary<br>Appals our numbers: haste we, Diomed,<br>To reinforcement, or we perish all.<br>Enter NESTOR<br><br>NESTOR<br>Go, bear Patroclus' body to Achilles;<br>And bid the snail-paced Ajax arm for shame.<br>There is a tho"
  },
  {
    word: "reliance",
    context: "-and the cap<br>Plays in the right hand, thus: but tell him,<br>My uses cry to me, I must serve my turn<br>Out of mine own; his days and times are past<br>And my reliances on his fracted dates<br>Have smit my credit: I love and honour him,<br>But must not break my back to heal his finger;<br>Immediate are my needs, and "
  },
  {
    word: "remorseless",
    context: "an wrong;<br>And as the butcher takes away the calf<br>And binds the wretch, and beats it when it strays,<br>Bearing it to the bloody slaughter-house,<br>Even so remorseless have they borne him hence;<br>And as the dam runs lowing up and down,<br>Looking the way her harmless young one went,<br>And can do nought but wail"
  },
  {
    word: "reprieve",
    context: "t vain.<br>COUNTESS<br>What angel shall<br>Bless this unworthy husband? he cannot thrive,<br>Unless her prayers, whom heaven delights to hear<br>And loves to grant, reprieve him from the wrath<br>Of greatest justice. Write, write, Rinaldo,<br>To this unworthy husband of his wife;<br>Let every word weigh heavy of her worth<br>"
  },
  {
    word: "resolve",
    context: "ee to bestow.<br>KING<br>Here is my hand; the premises observed,<br>Thy will by my performance shall be served:<br>So make the choice of thy own time, for I,<br>Thy resolved patient, on thee still rely.<br>More should I question thee, and more I must,<br>Though more to know could not be more to trust,<br>From whence thou c"
  },
  {
    word: "restoration",
    context: " we do awake him;<br>I doubt not of his temperance.<br>CORDELIA<br>Very well.<br>Doctor<br>Please you, draw near. Louder the music there!<br>CORDELIA<br>O my dear father! Restoration hang<br>Thy medicine on my lips; and let this kiss<br>Repair those violent harms that my two sisters<br>Have in thy reverence made!<br>KENT<br>Kind and d"
  },
  {
    word: "restraint",
    context: "s business calls on him.<br>The great prerogative and rite of love,<br>Which, as your due, time claims, he does acknowledge;<br>But puts it off to a compell'd restraint;<br>Whose want, and whose delay, is strew'd with sweets,<br>Which they distil now in the curbed time,<br>To make the coming hour o'erflow with joy<br>An"
  },
  {
    word: "retirement",
    context: "CIO<br>My lord, I know him; 'tis a meddling friar;<br>I do not like the man: had he been lay, my lord<br>For certain words he spake against your grace<br>In your retirement, I had swinged him soundly.<br>DUKE VINCENTIO<br>Words against me? this is a good friar, belike!<br>And to set on this wretched woman here<br>Against o"
  },
  {
    word: "revolting",
    context: "with black, yield day to night!<br>Comets, importing change of times and states,<br>Brandish your crystal tresses in the sky,<br>And with them scourge the bad revolting stars<br>That have consented unto Henry's death!<br>King Henry the Fifth, too famous to live long!<br>England ne'er lost a king of so much worth.<br>GLO"
  },
  {
    word: "rival",
    context: "rchant<br>Therefore give out you are of Epidamnum,<br>Lest that your goods too soon be confiscate.<br>This very day a Syracusian merchant<br>Is apprehended for arrival here;<br>And not being able to buy out his life<br>According to the statute of the town,<br>Dies ere the weary sun set in the west.<br>There is your money t"
  },
  {
    word: "roadway",
    context: ""
  },
  {
    word: "rumination",
    context: "lancholy of mine own, compounded of many simples,<br>extracted from many objects, and indeed the sundry's<br>contemplation of my travels, in which my often<br>rumination wraps me m a most humorous sadness.<br>ROSALIND<br>A traveller! By my faith, you have great reason to<br>be sad: I fear you have sold your own lands"
  },
  {
    word: "sacrificial",
    context: " on.<br>All those which were his fellows but of late,<br>Some better than his value, on the moment<br>Follow his strides, his lobbies fill with tendance,<br>Rain sacrificial whisperings in his ear,<br>Make sacred even his stirrup, and through him<br>Drink the free air.<br>Painter<br>Ay, marry, what of these?<br>Poet<br>When Fort"
  },
  {
    word: "sanctimonious",
    context: "s fall upon the king.<br>First Gentleman<br>Heaven grant us its peace, but not the King of<br>Hungary's!<br>Second Gentleman<br>Amen.<br>LUCIO<br>Thou concludest like the sanctimonious pirate, that<br>went to sea with the Ten Commandments, but scraped<br>one out of the table.<br>Second Gentleman<br>'Thou shalt not steal'?<br>LUCIO<br>Ay,"
  },
  {
    word: "satisfying",
    context: "ong enough to be believed<br>Of one persuaded well of--<br>POSTHUMUS LEONATUS<br>Never talk on't;<br>She hath been colted by him.<br>IACHIMO<br>If you seek<br>For further satisfying, under her breast--<br>Worthy the pressing--lies a mole, right proud<br>Of that most delicate lodging: by my life,<br>I kiss'd it; and it gave me pr"
  },
  {
    word: "savage",
    context: "ORLANDO<br>Why, how now, Adam! no greater heart in thee? Live<br>a little; comfort a little; cheer thyself a little.<br>If this uncouth forest yield any thing savage, I<br>will either be food for it or bring it for food to<br>thee. Thy conceit is nearer death than thy powers.<br>For my sake be comfortable; hold death"
  },
  {
    word: "savagery",
    context: "orth disorder'd twigs; her fallow leas<br>The darnel, hemlock and rank fumitory<br>Doth root upon, while that the coulter rusts<br>That should deracinate such savagery;<br>The even mead, that erst brought sweetly forth<br>The freckled cowslip, burnet and green clover,<br>Wanting the scythe, all uncorrected, rank,<br>Con"
  },
  {
    word: "schoolboy",
    context: "eit;<br>And I will wish thee never more to dance,<br>Nor never more in Russian habit wait.<br>O, never will I trust to speeches penn'd,<br>Nor to the motion of a schoolboy's tongue,<br>Nor never come in vizard to my friend,<br>Nor woo in rhyme, like a blind harper's song!<br>Taffeta phrases, silken terms precise,<br>Three-"
  },
  {
    word: "scrubbed",
    context: "e will, an if he live to be a man.<br>NERISSA<br>Ay, if a woman live to be a man.<br>GRATIANO<br>Now, by this hand, I gave it to a youth,<br>A kind of boy, a little scrubbed boy,<br>No higher than thyself; the judge's clerk,<br>A prating boy, that begg'd it as a fee:<br>I could not for my heart deny it him.<br>PORTIA<br>You were"
  },
  {
    word: "scuffle",
    context: "the war<br>Have glow'd like plated Mars, now bend, now turn,<br>The office and devotion of their view<br>Upon a tawny front: his captain's heart,<br>Which in the scuffles of great fights hath burst<br>The buckles on his breast, reneges all temper,<br>And is become the bellows and the fan<br>To cool a gipsy's lust.<br>Flour"
  },
  {
    word: "seamy-side",
    context: ""
  },
  {
    word: "shipwrecked",
    context: ":<br>I'll bring the body presently.<br>Exeunt<br><br>SCENE II. Ephesus. A room in CERIMON's house.<br><br>Enter CERIMON, with a Servant, and some Persons who have been shipwrecked<br>CERIMON<br>Philemon, ho!<br>Enter PHILEMON<br><br>PHILEMON<br>Doth my lord call?<br>CERIMON<br>Get fire and meat for these poor men:<br>'T has been a turbulent an"
  },
  {
    word: "shooting star",
    context: "re gone and fled,<br>As well assured Richard their king is dead.<br>Exit<br><br>EARL OF SALISBURY<br>Ah, Richard, with the eyes of heavy mind<br>I see thy glory like a shooting star<br>Fall to the base earth from the firmament.<br>Thy sun sets weeping in the lowly west,<br>Witnessing storms to come, woe and unrest:<br>Thy friend"
  },
  {
    word: "shudder",
    context: "d here choose I; joy be the consequence!<br>PORTIA<br>[Aside] How all the other passions fleet to air,<br>As doubtful thoughts, and rash-embraced despair,<br>And shuddering fear, and green-eyed jealousy! O love,<br>Be moderate; allay thy ecstasy,<br>In measure rein thy joy; scant this excess.<br>I feel too much thy bles"
  },
  {
    word: "silk",
    context: "rk. 'Od's my little life,<br>I think she means to tangle my eyes too!<br>No, faith, proud mistress, hope not after it:<br>'Tis not your inky brows, your black silk hair,<br>Your bugle eyeballs, nor your cheek of cream,<br>That can entame my spirits to your worship.<br>You foolish shepherd, wherefore do you follow her"
  },
  {
    word: "silliness",
    context: "d, and sleep.<br>RODERIGO<br>I will incontinently drown myself.<br>IAGO<br>If thou dost, I shall never love thee after. Why,<br>thou silly gentleman!<br>RODERIGO<br>It is silliness to live when to live is torment; and<br>then have we a prescription to die when death is our physician.<br>IAGO<br>O villainous! I have looked upon t"
  },
  {
    word: "skim milk",
    context: "e and making quite,<br>Or else you are that shrewd and knavish sprite<br>Call'd Robin Goodfellow: are not you he<br>That frights the maidens of the villagery;<br>Skim milk, and sometimes labour in the quern<br>And bootless make the breathless housewife churn;<br>And sometime make the drink to bear no barm;<br>Mislead ni"
  },
  {
    word: "soft-hearted",
    context: " tend upon your steps!<br>SUFFOLK<br>Cease, gentle queen, these execrations,<br>And let thy Suffolk take his heavy leave.<br>QUEEN MARGARET<br>Fie, coward woman and soft-hearted wretch!<br>Hast thou not spirit to curse thine enemy?<br>SUFFOLK<br>A plague upon them! wherefore should I curse them?<br>Would curses kill, as doth "
  },
  {
    word: "spectacled",
    context: "Capitol!<br>Flourish. Cornets. Exeunt in state, as before. BRUTUS and SICINIUS come forward<br><br>BRUTUS<br>All tongues speak of him, and the bleared sights<br>Are spectacled to see him: your prattling nurse<br>Into a rapture lets her baby cry<br>While she chats him: the kitchen malkin pins<br>Her richest lockram 'bout he"
  },
  {
    word: "splitting",
    context: " valour's worth divide<br>In storms of fortune; for in her ray and brightness<br>The herd hath more annoyance by the breeze<br>Than by the tiger; but when the splitting wind<br>Makes flexible the knees of knotted oaks,<br>And flies fled under shade, why, then the thing of courage<br>As roused with rage with rage doth"
  },
  {
    word: "sportive",
    context: " I<br>That chase thee from thy country and expose<br>Those tender limbs of thine to the event<br>Of the none-sparing war? and is it I<br>That drive thee from the sportive court, where thou<br>Wast shot at with fair eyes, to be the mark<br>Of smoky muskets? O you leaden messengers,<br>That ride upon the violent speed of "
  },
  {
    word: "stealthy",
    context: " sleep; witchcraft celebrates<br>Pale Hecate's offerings, and wither'd murder,<br>Alarum'd by his sentinel, the wolf,<br>Whose howl's his watch, thus with his stealthy pace.<br>With Tarquin's ravishing strides, towards his design<br>Moves like a ghost. Thou sure and firm-set earth,<br>Hear not my steps, which way the"
  },
  {
    word: "stillborn",
    context: ""
  },
  {
    word: "stocking",
    context: ", they conveyed me into a buck-basket.<br>FORD<br>A buck-basket!<br>FALSTAFF<br>By the Lord, a buck-basket! rammed me in with foul<br>shirts and smocks, socks, foul stockings, greasy<br>napkins; that, Master Brook, there was the rankest<br>compound of villanous smell that ever offended nostril.<br>FORD<br>And how long lay you"
  },
  {
    word: "successful",
    context: "ill not be entreated, his<br>own peril on his forwardness.<br>ROSALIND<br>Is yonder the man?<br>LE BEAU<br>Even he, madam.<br>CELIA<br>Alas, he is too young! yet he looks successfully.<br>DUKE FREDERICK<br>How now, daughter and cousin! are you crept hither<br>to see the wrestling?<br>ROSALIND<br>Ay, my liege, so please you give us lea"
  },
  {
    word: "suffocating",
    context: "me proof. Her name, that was as fresh<br>As Dian's visage, is now begrimed and black<br>As mine own face. If there be cords, or knives,<br>Poison, or fire, or suffocating streams,<br>I'll not endure it. Would I were satisfied!<br>IAGO<br>I see, sir, you are eaten up with passion:<br>I do repent me that I put it to you.<br>"
  },
  {
    word: "superscript",
    context: "lla virgin,<br>was this directed to you?<br>JAQUENETTA<br>Ay, sir, from one Monsieur Biron, one of the strange<br>queen's lords.<br>HOLOFERNES<br>I will overglance the superscript: 'To the<br>snow-white hand of the most beauteous Lady<br>Rosaline.' I will look again on the intellect of<br>the letter, for the nomination of the"
  },
  {
    word: "switch",
    context: "<br>Porter<br>Belong to the gallows, and be hanged, ye rogue! is<br>this a place to roar in? Fetch me a dozen crab-tree<br>staves, and strong ones: these are but switches to<br>'em. I'll scratch your heads: you must be seeing<br>christenings? do you look for ale and cakes here,<br>you rude rascals?<br>Man<br>Pray, sir, be pat"
  },
  {
    word: "tardily",
    context: "that practised not his gait;<br>And speaking thick, which nature made his blemish,<br>Became the accents of the valiant;<br>For those that could speak low and tardily<br>Would turn their own perfection to abuse,<br>To seem like him: so that in speech, in gait,<br>In diet, in affections of delight,<br>In military rules, "
  },
  {
    word: "tardiness",
    context: " have it<br>Hath lost me in your liking.<br>KING LEAR<br>Better thou<br>Hadst not been born than not to have pleased me better.<br>KING OF FRANCE<br>Is it but this,--a tardiness in nature<br>Which often leaves the history unspoke<br>That it intends to do? My lord of Burgundy,<br>What say you to the lady? Love's not love<br>When "
  },
  {
    word: "threateningly",
    context: "ute.<br>LAFEU<br>I had rather be in this choice than throw ames-ace<br>for my life.<br>HELENA<br>The honour, sir, that flames in your fair eyes,<br>Before I speak, too threateningly replies:<br>Love make your fortunes twenty times above<br>Her that so wishes and her humble love!<br>Second Lord<br>No better, if you please.<br>HELENA"
  },
  {
    word: "tightly",
    context: "will run no base humour: here, take the<br>humour-letter: I will keep the havior of reputation.<br>FALSTAFF<br>[To ROBIN] Hold, sirrah, bear you these letters tightly;<br>Sail like my pinnace to these golden shores.<br>Rogues, hence, avaunt! vanish like hailstones, go;<br>Trudge, plod away o' the hoof; seek shelter, "
  },
  {
    word: "time-honored",
    context: ""
  },
  {
    word: "title page",
    context: ""
  },
  {
    word: "to arouse",
    context: ""
  },
  {
    word: "to besmirch",
    context: ""
  },
  {
    word: "to blanket",
    context: ""
  },
  {
    word: "to cake",
    context: ""
  },
  {
    word: "to castigate",
    context: " a villain's office or a fool's.<br>Dost please thyself in't?<br>APEMANTUS<br>Ay.<br>TIMON<br>What! a knave too?<br>APEMANTUS<br>If thou didst put this sour-cold habit on<br>To castigate thy pride, 'twere well: but thou<br>Dost it enforcedly; thou'ldst courtier be again,<br>Wert thou not beggar. Willing misery<br>Outlives encertain"
  },
  {
    word: "to cater",
    context: ""
  },
  {
    word: "to champion",
    context: ""
  },
  {
    word: "to comply",
    context: "bsence. Let me go with him.<br>OTHELLO<br>Let her have your voices.<br>Vouch with me, heaven, I therefore beg it not,<br>To please the palate of my appetite,<br>Nor to comply with heat--the young affects<br>In me defunct--and proper satisfaction.<br>But to be free and bounteous to her mind:<br>And heaven defend your good s"
  },
  {
    word: "to compromise",
    context: "e,<br>Be cast from possibility of all.<br>YORK<br>Insulting Charles! hast thou by secret means<br>Used intercession to obtain a league,<br>And, now the matter grows to compromise,<br>Stand'st thou aloof upon comparison?<br>Either accept the title thou usurp'st,<br>Of benefit proceeding from our king<br>And not of any challeng"
  },
  {
    word: "to cow",
    context: ""
  },
  {
    word: "to denote",
    context: "te,<br>And in that habit, when Slender sees his time<br>To take her by the hand and bid her go,<br>She shall go with him: her mother hath intended,<br>The better to denote her to the doctor,<br>For they must all be mask'd and vizarded,<br>That quaint in green she shall be loose enrobed,<br>With ribands pendent, flaring "
  },
  {
    word: "to dislocate",
    context: "Y<br>Thou changed and self-cover'd thing, for shame,<br>Be-monster not thy feature. Were't my fitness<br>To let these hands obey my blood,<br>They are apt enough to dislocate and tear<br>Thy flesh and bones: howe'er thou art a fiend,<br>A woman's shape doth shield thee.<br>GONERIL<br>Marry, your manhood now--<br>Enter a Messe"
  },
  {
    word: "to drug",
    context: ""
  },
  {
    word: "to dwindle",
    context: ""
  },
  {
    word: "to educate",
    context: ""
  },
  {
    word: "to elbow",
    context: "ood diet, as I told you,--<br>FROTH<br>All this is true.<br>POMPEY<br>Why, very well, then,--<br>ESCALUS<br>Come, you are a tedious fool: to the purpose. What<br>was done to Elbow's wife, that he hath cause to<br>complain of? Come me to what was done to her.<br>POMPEY<br>Sir, your honour cannot come to that yet.<br>ESCALUS<br>No, sir,"
  },
  {
    word: "to enmesh",
    context: ""
  },
  {
    word: "to ensnare",
    context: ""
  },
  {
    word: "to forward",
    context: ""
  },
  {
    word: "to gossip",
    context: ""
  },
  {
    word: "to humor",
    context: ""
  },
  {
    word: "to hurry",
    context: ""
  },
  {
    word: "to impede",
    context: ""
  },
  {
    word: "to lament",
    context: ", there is but one<br>shamed that was never gracious; if killed, but one<br>dead that was willing to be so: I shall do my<br>friends no wrong, for I have none to lament me, the<br>world no injury, for in it I have nothing; only in<br>the world I fill up a place, which may be better<br>supplied when I have made it emp"
  },
  {
    word: "to lapse",
    context: "miss my way: will poor folks lie,<br>That have afflictions on them, knowing 'tis<br>A punishment or trial? Yes; no wonder,<br>When rich ones scarce tell true. To lapse in fulness<br>Is sorer than to lie for need, and falsehood<br>Is worse in kings than beggars. My dear lord!<br>Thou art one o' the false ones. Now I t"
  },
  {
    word: "to launder",
    context: ""
  },
  {
    word: "to lower",
    context: ""
  },
  {
    word: "to misquote",
    context: ""
  },
  {
    word: "to negotiate",
    context: "LIVIA<br>O, I have read it: it is heresy. Have you no more to say?<br>VIOLA<br>Good madam, let me see your face.<br>OLIVIA<br>Have you any commission from your lord to negotiate<br>with my face? You are now out of your text: but<br>we will draw the curtain and show you the picture.<br>Look you, sir, such a one I was this p"
  },
  {
    word: "to numb",
    context: "way the ladies' hearts of France,<br>I thought King Henry had resembled thee<br>In courage, courtship and proportion:<br>But all his mind is bent to holiness,<br>To number Ave-Maries on his beads;<br>His champions are the prophets and apostles,<br>His weapons holy saws of sacred writ,<br>His study is his tilt-yard, and "
  },
  {
    word: "to outdare",
    context: ""
  },
  {
    word: "to outgrow",
    context: ""
  },
  {
    word: "to outweigh",
    context: ""
  },
  {
    word: "to pander",
    context: ""
  },
  {
    word: "to petition",
    context: ""
  },
  {
    word: "to rant",
    context: ""
  },
  {
    word: "to rival",
    context: ""
  },
  {
    word: "to secure",
    context: "good Margaret, stay.<br>QUEEN MARGARET<br>What are you made of? you'll nor fight nor fly:<br>Now is it manhood, wisdom and defence,<br>To give the enemy way, and to secure us<br>By what we can, which can no more but fly.<br>Alarum afar off<br><br>If you be ta'en, we then should see the bottom<br>Of all our fortunes: but if we"
  },
  {
    word: "to sneak",
    context: ""
  },
  {
    word: "to squabble",
    context: ""
  },
  {
    word: "to submerge",
    context: ""
  },
  {
    word: "to sully",
    context: ""
  },
  {
    word: "to supervise",
    context: ""
  },
  {
    word: "to swagger",
    context: ""
  },
  {
    word: "to torture",
    context: "h,<br>if you mean to save yourself from whipping, leap me<br>over this stool and run away.<br>SIMPCOX<br>Alas, master, I am not able to stand alone:<br>You go about to torture me in vain.<br>Enter a Beadle with whips<br><br>GLOUCESTER<br>Well, sir, we must have you find your legs. Sirrah<br>beadle, whip him till he leap over tha"
  },
  {
    word: "to unclog",
    context: ""
  },
  {
    word: "to uncurl",
    context: ""
  },
  {
    word: "to undervalue",
    context: ""
  },
  {
    word: "to undress",
    context: ""
  },
  {
    word: "to unhand",
    context: ""
  },
  {
    word: "to widen",
    context: ""
  },
  {
    word: "tongue-tied",
    context: "ick'd a welcome;<br>And in the modesty of fearful duty<br>I read as much as from the rattling tongue<br>Of saucy and audacious eloquence.<br>Love, therefore, and tongue-tied simplicity<br>In least speak most, to my capacity.<br>Re-enter PHILOSTRATE<br><br>PHILOSTRATE<br>So please your grace, the Prologue is address'd.<br>THESEUS"
  },
  {
    word: "traditional",
    context: "lessed sanctuary! not for all this land<br>Would I be guilty of so deep a sin.<br>BUCKINGHAM<br>You are too senseless--obstinate, my lord,<br>Too ceremonious and traditional<br>Weigh it but with the grossness of this age,<br>You break not sanctuary in seizing him.<br>The benefit thereof is always granted<br>To those whose "
  },
  {
    word: "tranquil",
    context: "ole. I am joined with no<br>foot-land rakers, no long-staff sixpenny strikers,<br>none of these mad mustachio purple-hued malt-worms;<br>but with nobility and tranquillity, burgomasters and<br>great oneyers, such as can hold in, such as will<br>strike sooner than speak, and speak sooner than<br>drink, and drink soone"
  },
  {
    word: "transcendence",
    context: " acknowledge it to be the--<br>LAFEU<br>Very hand of heaven.<br>PAROLLES<br>Ay, so I say.<br>LAFEU<br>In a most weak--<br>pausing<br><br>and debile minister, great power, great<br>transcendence: which should, indeed, give us a<br>further use to be made than alone the recovery of<br>the king, as to be--<br>pausing<br><br>generally thankful.<br>PAR"
  },
  {
    word: "unaccommodated",
    context: "west the worm no silk, the beast no hide, the sheep<br>no wool, the cat no perfume. Ha! here's three on<br>'s are sophisticated! Thou art the thing itself:<br>unaccommodated man is no more but such a poor bare,<br>forked animal as thou art. Off, off, you lendings!<br>come unbutton here.<br>Tearing off his clothes<br><br>Fo"
  },
  {
    word: "unappeased",
    context: ",<br>That we may hew his limbs, and on a pile<br>Ad manes fratrum sacrifice his flesh,<br>Before this earthy prison of their bones;<br>That so the shadows be not unappeased,<br>Nor we disturb'd with prodigies on earth.<br>TITUS ANDRONICUS<br>I give him you, the noblest that survives,<br>The eldest son of this distressed qu"
  },
  {
    word: "unaware",
    context: "Even such a passion doth embrace my bosom:<br>My heart beats thicker than a feverous pulse;<br>And all my powers do their bestowing lose,<br>Like vassalage at unawares encountering<br>The eye of majesty.<br>Re-enter PANDARUS with CRESSIDA<br><br>PANDARUS<br>Come, come, what need you blush? shame's a baby.<br>Here she is now: "
  },
  {
    word: "unchanging",
    context: "!<br>How ill-beseeming is it in thy sex<br>To triumph, like an Amazonian trull,<br>Upon their woes whom fortune captivates!<br>But that thy face is, vizard-like, unchanging,<br>Made impudent with use of evil deeds,<br>I would assay, proud queen, to make thee blush.<br>To tell thee whence thou camest, of whom derived,<br>We"
  },
  {
    word: "unclaimed",
    context: ""
  },
  {
    word: "uncomfortable",
    context: "e beguil'd,<br>By cruel cruel thee quite overthrown!<br>O love! O life! not life, but love in death!<br>CAPULET<br>Despised, distressed, hated, martyr'd, kill'd!<br>Uncomfortable time, why camest thou now<br>To murder, murder our solemnity?<br>O child! O child! my soul, and not my child!<br>Dead art thou! Alack! my child i"
  },
  {
    word: "unearthly",
    context: "aught me, the celestial habits,<br>Methinks I so should term them, and the reverence<br>Of the grave wearers. O, the sacrifice!<br>How ceremonious, solemn and unearthly<br>It was i' the offering!<br>CLEOMENES<br>But of all, the burst<br>And the ear-deafening voice o' the oracle,<br>Kin to Jove's thunder, so surprised my se"
  },
  {
    word: "uneducated",
    context: "in way, of<br>explication; facere, as it were, replication, or<br>rather, ostentare, to show, as it were, his<br>inclination, after his undressed, unpolished,<br>uneducated, unpruned, untrained, or rather,<br>unlettered, or ratherest, unconfirmed fashion, to<br>insert again my haud credo for a deer.<br>DULL<br>I said the d"
  },
  {
    word: "ungoverned",
    context: ""
  },
  {
    word: "unmitigated",
    context: "onoured my kinswoman? O<br>that I were a man! What, bear her in hand until they<br>come to take hands; and then, with public<br>accusation, uncovered slander, unmitigated rancour,<br>--O God, that I were a man! I would eat his heart<br>in the market-place.<br>BENEDICK<br>Hear me, Beatrice,--<br>BEATRICE<br>Talk with a man out"
  },
  {
    word: "unpublished",
    context: ""
  },
  {
    word: "unreal",
    context: "?--<br>Affection! thy intention stabs the centre:<br>Thou dost make possible things not so held,<br>Communicatest with dreams;--how can this be?--<br>With what's unreal thou coactive art,<br>And fellow'st nothing: then 'tis very credent<br>Thou mayst co-join with something; and thou dost,<br>And that beyond commission, "
  },
  {
    word: "unsolicited",
    context: " to this course<br>Which you are running here.<br>KING HENRY VIII<br>I then moved you,<br>My Lord of Canterbury; and got your leave<br>To make this present summons: unsolicited<br>I left no reverend person in this court;<br>But by particular consent proceeded<br>Under your hands and seals: therefore, go on:<br>For no dislike "
  },
  {
    word: "unswayed",
    context: ""
  },
  {
    word: "unwillingness",
    context: "s golden beams to you here lent<br>Shall point on me and gild my banishment.<br>KING RICHARD II<br>Norfolk, for thee remains a heavier doom,<br>Which I with some unwillingness pronounce:<br>The sly slow hours shall not determinate<br>The dateless limit of thy dear exile;<br>The hopeless word of 'never to return'<br>Breathe"
  },
  {
    word: "upstairs",
    context: "<br>FRANCIS<br>Anon, anon, sir.<br>Exit<br><br>PRINCE HENRY<br>That ever this fellow should have fewer words than a<br>parrot, and yet the son of a woman! His industry is<br>upstairs and downstairs; his eloquence the parcel of<br>a reckoning. I am not yet of Percy's mind, the<br>Hotspur of the north; he that kills me some six or"
  },
  {
    word: "urging",
    context: "y;<br>But were we burdened with like weight of pain,<br>As much or more would we ourselves complain:<br>So thou, that hast no unkind mate to grieve thee,<br>With urging helpless patience wouldst relieve me,<br>But, if thou live to see like right bereft,<br>This fool-begg'd patience in thee will be left.<br>LUCIANA<br>Well,"
  },
  {
    word: "useful",
    context: "urther harmful than in show.<br>LEWIS<br>Your grace shall pardon me, I will not back:<br>I am too high-born to be propertied,<br>To be a secondary at control,<br>Or useful serving-man and instrument,<br>To any sovereign state throughout the world.<br>Your breath first kindled the dead coal of wars<br>Between this chastised"
  },
  {
    word: "varied",
    context: "I was taken with a damsel.<br>FERDINAND<br>Well, it was proclaimed 'damsel.'<br>COSTARD<br>This was no damsel, neither, sir; she was a virgin.<br>FERDINAND<br>It is so varied, too; for it was proclaimed 'virgin.'<br>COSTARD<br>If it were, I deny her virginity: I was taken with a maid.<br>FERDINAND<br>This maid will not serve you"
  },
  {
    word: "vastly",
    context: ""
  },
  {
    word: "viewless",
    context: "come<br>A kneaded clod; and the delighted spirit<br>To bathe in fiery floods, or to reside<br>In thrilling region of thick-ribbed ice;<br>To be imprison'd in the viewless winds,<br>And blown with restless violence round about<br>The pendent world; or to be worse than worst<br>Of those that lawless and incertain thought<br>"
  },
  {
    word: "vulnerable",
    context: "und the loud winds, or with bemock'd-at stabs<br>Kill the still-closing waters, as diminish<br>One dowle that's in my plume: my fellow-ministers<br>Are like invulnerable. If you could hurt,<br>Your swords are now too massy for your strengths<br>And will not be uplifted. But remember--<br>For that's my business to you"
  },
  {
    word: "watchdog",
    context: ""
  },
  {
    word: "well-behaved",
    context: " fat<br>men, as long as I have an eye to make difference of<br>men's liking: and yet he would not swear; praised<br>women's modesty; and gave such orderly and<br>well-behaved reproof to all uncomeliness, that I<br>would have sworn his disposition would have gone to<br>the truth of his words; but they do no more adher"
  },
  {
    word: "well-bred",
    context: ""
  },
  {
    word: "well-read",
    context: ""
  },
  {
    word: "whirligig",
    context: ". 'By the Lord, fool, I am not mad.'<br>But do you remember? 'Madam, why laugh you at such<br>a barren rascal? an you smile not, he's gagged:'<br>and thus the whirligig of time brings in his revenges.<br>MALVOLIO<br>I'll be revenged on the whole pack of you.<br>Exit<br><br>OLIVIA<br>He hath been most notoriously abused.<br>DUKE "
  },
  {
    word: "widowed",
    context: "ake up those cords: poor ropes, you are beguiled,<br>Both you and I; for Romeo is exiled:<br>He made you for a highway to my bed;<br>But I, a maid, die maiden-widowed.<br>Come, cords, come, nurse; I'll to my wedding-bed;<br>And death, not Romeo, take my maidenhead!<br>Nurse<br>Hie to your chamber: I'll find Romeo<br>To com"
  },
  {
    word: "worn out",
    context: "-qualified and less attemptable<br>than any the rarest of our ladies in France.<br>IACHIMO<br>That lady is not now living, or this gentleman's<br>opinion by this worn out.<br>POSTHUMUS LEONATUS<br>She holds her virtue still and I my mind.<br>IACHIMO<br>You must not so far prefer her 'fore ours of Italy.<br>POSTHUMUS LEONATUS<br>"
  },
  {
    word: "worthless",
    context: "I do fail in fortune of my choice,<br>Immediately to leave you and be gone.<br>PORTIA<br>To these injunctions every one doth swear<br>That comes to hazard for my worthless self.<br>ARRAGON<br>And so have I address'd me. Fortune now<br>To my heart's hope! Gold; silver; and base lead.<br>'Who chooseth me must give and hazard"
  },
  {
    word: "yelping",
    context: "se their wings.<br>O, negligent and heedless discipline!<br>How are we park'd and bounded in a pale,<br>A little herd of England's timorous deer,<br>Mazed with a yelping kennel of French curs!<br>If we be English deer, be then in blood;<br>Not rascal-like, to fall down with a pinch,<br>But rather, moody-mad and desperat"
  },
  {
    word: "zany",
    context: "trick on't: here was a consent,<br>Knowing aforehand of our merriment,<br>To dash it like a Christmas comedy:<br>Some carry-tale, some please-man, some slight zany,<br>Some mumble-news, some trencher-knight, some Dick,<br>That smiles his cheek in years and knows the trick<br>To make my lady laugh when she's disposed,"
  },

];
