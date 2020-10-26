import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MyButton from '../components/MyButton.vue';

const storybook = storiesOf('Button', module);
storybook.addDecorator(withKnobs);

storybook
  .add('default story', () => {
    return {
      components: { MyButton },
      props: {
        isDisabled: {
          default: boolean('Disabled', false)
        },
        text: {
          default: text('Text', 'Hello Storybook')
        }
      },
      
      template: `
        <MyButton :isDisabled="isDisabled">{{ text }}</MyButton>
      `,
      methods: { action: action('clicked') }
    };
  })


