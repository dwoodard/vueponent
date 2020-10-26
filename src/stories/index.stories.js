import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


import MyButton from '../components/MyButton.vue';


export default {
  title: 'MyButton',
  component: MyButton,
};

const storybook = storiesOf('MyButton', module)

storybook
  .addDecorator(withKnobs)
  .addParameters({ component: MyButton })
  .add('Primary', () => {
    return {
      components: { MyButton },
      props: {
        isDisabled: {
          default: boolean('Disabled', false)
        },
        text: {
          default: text('Label', 'My Label')
        }
      },
      
      template: `
        <MyButton :isDisabled="isDisabled">{{ text }}</MyButton>
      `,
      methods: { action: action('clicked') }
    };
  })
  .add('Secondary', () => {
    return {
      components: { MyButton },
      props: {
        isDisabled: {
          default: boolean('Disabled', false)
        },
        text: {
          default: text('Label', 'My Label')
        }
      },
      
      template: `
        <MyButton :isDisabled="isDisabled">{{ text }}</MyButton>
      `,
      methods: { action: action('clicked') }
    };
  })



