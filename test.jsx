import {
  Container,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  'Container-2412': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: '40px 40px 40px 40px',
    margin: '0px 0px 0px 0px',
    background: rbga(255, 255, 255, 1),
    color: rbga(0, 0, 0, 1),
    width: '800px',
    height: 'auto',
  },
  'Container-8620': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: '40px 40px 40px 40px',
    margin: '0px 0px 40px 0px',
    background: rbga(255, 255, 255, 1),
    color: rbga(0, 0, 0, 1),
    width: '100%',
    height: 'auto',
  },
  'Container-3957': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: '0px 20px 0px 20px',
    margin: '0px 0px 0px 0px',
    background: rbga(255, 255, 255, 1),
    color: rbga(0, 0, 0, 1),
    width: '40%',
    height: '100%',
  },
  'Typography-4526': {
    fontSize: '23',
    textAlign: 'left',
    fontWeight: '400',
    color: rbga(92, 90, 90, 1),
    margin: '0px 0px 0px 0px',
    text: 'Craft.js is a React framework for building powerful & feature-rich drag-n-drop page editors.',
  },
  'Container-9431': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: '0px 20px 0px 20px',
    margin: '0px 0px 0px 0px',
    background: rbga(255, 255, 255, 1),
    color: rbga(0, 0, 0, 1),
    width: '60%',
    height: '100%',
  },

}

function Home(props) {
  const { classes } = props;

  return (
    <>
      <Container className={classes[`Container-2412`]}>
        <Container className={classes[`Container-8620`]}>
          <Container className={classes[`Container-3957`]}>
            <Typography className={classes[`Typography-4526`]}>
Craft.js is a React framework for building powerful & feature-rich drag-n-drop page editors.
            </ Typography>
          </ Container>
          <Container className={classes[`Container-9431`]}>
            <Typography className={classes[`Typography-916`]}>
Everything you see here, including the editor, itself is made of React components. Craft.js comes only with the building blocks for a page editor; it provides a drag-n-drop system and handles the way user components should be rendered, updated and moved, among other things. <br /> <br /> You control the way your editor looks and behave.
            </ Typography>
          </ Container>
        </ Container>
      </ Container>
    </>
  );
}

export default withStyles(styles)(Home);