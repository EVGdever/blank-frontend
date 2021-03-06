// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import toJson from 'enzyme-to-json'

// React 17 Enzyme adapter
Enzyme.configure({adapter: new Adapter()})

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

// Fail tests on any warning
// eslint-disable-next-line no-console
console.error = (message) => {
  throw new Error(message)
}
