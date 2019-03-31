import { render, h } from 'preact';
import SvgInCss from './SvgInCss';

describe('svg in css', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<SvgInCss />, div);
  });
});
