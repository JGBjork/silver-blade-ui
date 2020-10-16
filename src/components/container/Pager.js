import React from 'react';
import Title from '../view/Title';
import { Provider } from 'react-redux';
import store from '../../app/store';

class Page extends React.Component {
  createTitle(props) {
    if(!props.titleLess) {
      let pageTitleProps = {
        caption: props.caption || "Page",
      }

      if(props.part && props.total) {
        pageTitleProps = {
          ...pageTitleProps,
          paged: true,
          part: props.part,
          total: props.total
        }
      } else {
        pageTitleProps = {
          ...pageTitleProps,
          paged: false
        }
      }
      return <Title {...pageTitleProps} />;
    } else return null;
  }

  render () {
    let ButtonPrev = this.props.onPrev
                     ? (<button className="btn btn-primary ml-1 mr-1"
                                onClick={this.props.onPrev}>
                          Back
                        </button>)
                     : null;
    let ButtonNext = this.props.onNext
                     ? (<button className="btn btn-primary ml-1 mr-1"
                                onClick={this.props.onNext}>
                          Next
                        </button>)
                     : null;
    let Navigator = null;
    if(this.props.onPrev || this.props.onNext) {
      Navigator = (
        <div className="pt-3">
          { ButtonPrev ? ButtonPrev : null }
          { ButtonNext ? ButtonNext : null }
        </div>
      )
    };
    return (
      <div className = "container-sm">
        {this.createTitle(this.props)}
        {this.props.children}
        {!this.props.blackHole && Navigator ? Navigator : null}
      </div>
    );
  }
}

class Pager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      lastIndex: React.Children.count(this.props.children) - 1,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.childrenArray = 
        React.Children
          .map(this.props.children, (child, i) => {
            return (
              <React.StrictMode>
                <Provider store={store}>
                  <Page {...this.props} 
                        part={i+1} 
                        total={this.state.lastIndex+1}
                        blackHole={i===this.state.lastIndex}
                        onNext={i===this.state.lastIndex ? null : this.next} 
                        onPrev={i===0 ? null : this.prev}>
                    {child}
                  </Page>
                </Provider>
              </React.StrictMode>
            );
          });
  }

  next() {
    this.setState({
      current: this.state.current === this.state.lastIndex
               ? this.state.lastIndex
               : this.state.current + 1,
    });
  }

  prev() {
    this.setState({
      current: this.state.current === 0 ? 0 : this.state.current - 1,
    });
  }

  render() {
    return <>{this.childrenArray[this.state.current]}</>;
  }
}

export { Page, Pager };
