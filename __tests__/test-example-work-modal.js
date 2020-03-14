import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new Adapter()});

const myExample = {
    'title': "Work Example",
    'href': 'https://example.com',
    'desc': 'Fugiat nulla Lorem laborum cupidatat voluptate anim anim nisi veniam culpa ullamco. Et consectetur Lorem nostrud fugiat quis laborum qui do sunt. Ad eiusmod occaecat ipsum officia do consectetur laborum nisi in consectetur esse. Ex do pariatur exercitation enim mollit occaecat laboris proident est. Quis voluptate aute laboris fugiat excepteur id incididunt sunt cupidatat. Occaecat cillum reprehenderit consectetur incididunt velit et aliquip consequat do.',
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
    }
};

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample} />);
    let anchors = component.find('a');

    it("Should be contain a single 'a' element", () => {
        // console.log(component.debug());
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        // expect(anchors.node.props.href).toEqual(myExample.href);
        expect(anchors.prop('href')).toEqual(myExample.href);
    });
});
