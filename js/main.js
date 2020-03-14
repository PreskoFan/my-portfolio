import React from 'react';
import ReactDom from 'react-dom'
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example",
        'href':'http://example.com',
        'desc':'Fugiat nulla Lorem laborum cupidatat voluptate anim anim nisi veniam culpa ullamco. Et consectetur Lorem nostrud fugiat quis laborum qui do sunt. Ad eiusmod occaecat ipsum officia do consectetur laborum nisi in consectetur esse. Ex do pariatur exercitation enim mollit occaecat laboris proident est. Quis voluptate aute laboris fugiat excepteur id incididunt sunt cupidatat. Occaecat cillum reprehenderit consectetur incididunt velit et aliquip consequat do.',
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio Boilderplate",
        'href':'http://example.com',
        'desc':'Proident sunt minim deserunt labore ut ipsum. Anim commodo deserunt officia quis Lorem sunt cupidatat. Ullamco laborum Lorem et ex elit velit excepteur voluptate exercitation consequat ex dolor. Velit reprehenderit aute voluptate labore qui irure eu esse aute consectetur irure. Sit in elit ad magna voluptate.',
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/example2.png",
            'comment': ""
        }
    },
    {
        'title': "Work Cat",
        'href':'http://example.com',
        'desc':'Irure in amet in commodo elit enim velit voluptate. Nisi consectetur cillum minim ipsum exercitation commodo et sint aliqua. Eiusmod deserunt enim fugiat ullamco deserunt sint commodo ea in id laboris ex laboris. Ullamco culpa adipisicing tempor exercitation veniam cillum veniam. Ut excepteur tempor culpa dolor excepteur eu nostrud excepteur esse. Pariatur laboris dolor aliqua nulla enim cillum id fugiat amet sunt non ad nostrud pariatur. Tempor minim pariatur officia in culpa elit elit.',
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                        https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
]
ReactDom.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));