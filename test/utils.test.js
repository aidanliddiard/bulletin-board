// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPost } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderPost function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="p"><img src="/assets/icons8-round-pushpin-36.png"><div class="location"><h4>White Salmon, WA</h4></div><div class="img"><img src="../assets/gabriel-sanchez-F_moKY91WYc-unsplash.jpg"></div><div class="description"><p>Hello from home! Thinking of you and hope you are doing well.</p><p>-Mom and Dad</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPost({
        id: '1',
        img: '../assets/gabriel-sanchez-F_moKY91WYc-unsplash.jpg',
        description: 'Hello from home! Thinking of you and hope you are doing well.',
        name: 'Mom and Dad',
        location: 'White Salmon, WA',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
