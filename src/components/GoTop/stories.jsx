import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p>
        Officiis commodi enim dolorum itaque omnis? Atque, inventore adipisci ex
        mollitia ad praesentium sed explicabo accusantium exercitationem laborum
        iste dolores consequatur blanditiis.
      </p>

      <GoTop {...args}></GoTop>
    </div>
  );
};
