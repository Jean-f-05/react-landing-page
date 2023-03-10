import { mapMenu } from './map-menu';
import { mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predifined object if no data provided', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match required key/values', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if no links provided', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links are provided', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
