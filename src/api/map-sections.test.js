import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import mockData from './data.json';

describe('map-sections', () => {
  it('SHOULD RENDER SECTION IF NO DATA IS SENT', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('SHOULD RENDER SECTION WITH DATA', () => {
    const data = mapSections(mockData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('SHOULD TEST SECTION GRID WITH NO IMAGES OR TEXT', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns without data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'title',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('home');
    expect(data.title).toBe('title');
    expect(data.html).toBe('abc');
  });

  it('should map grid section with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'something',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('something');
  });

  it('SHOULD MAP GRID SECTION WITHOUT DATA', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('SHOULD MAP GRID IMAGE WITHOUT DATA', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('SHOULD MAP GRID IMAGE WITH DATA', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Image',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'Image',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('Image');
    expect(data.title).toBe('Image');
    expect(data.description).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.jpg');
    expect(data.grid[0].altText).toBe('abc');
  });
});
