import { html, TemplateResult } from 'lit';
import '../src/wc-poc.js';

export default {
  title: 'WcPoc',
  component: 'wc-poc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <wc-poc style="--wc-poc-background-color: ${backgroundColor}" .header=${header}></wc-poc>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
