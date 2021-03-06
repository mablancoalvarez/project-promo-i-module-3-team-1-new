import React from 'react';
import CollapsableItem from './ComponentsAside/CollapsableItem';
import Design from './ComponentsAside/Design';
import Share from './ComponentsAside/Share.js';
import Fill from './ComponentsAside/Fill';
import PropTypes from 'prop-types';


class FormAside extends React.Component {


  render() {
    return (
      <div className="grid-1">
        <ul id="formList" className="formList">
          <CollapsableItem collapsableTitle='Diseña'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-1'
                            activePanel = {this.props.activePanel}
                            icon = 'form__icon far fa-object-ungroup'
                            rotatearrow = {this.props.rotatearrow}
                            handleSwitchMode= {this.handleSwitchMode}
                            mode ={this.props.mode}

          >
        
            <Design 
                  checked = {this.props.valuepalette}
                  handleInputValue={this.props.handleInputValue}
                  handleSwitchMode= {this.handleSwitchMode}
                  mode ={this.props.mode}
                  
                  
            />
          </CollapsableItem>
        
          <CollapsableItem collapsableTitle='Rellena'
                            handleCollapse={this.props.handleCollapse}
                            id = 'collapse-2'
                            activePanel = {this.props.activePanel}
                            icon = 'form__icon far fa-keyboard'
                            rotatearrow = {this.props.rotatearrow}
                            handleSwitchMode= {this.handleSwitchMode}
                            mode ={this.props.mode}

          >
          
            <Fill     valueName={this.props.valueName}
                      valueJob={this.props.valueJob}
                      valueEmail={this.props.valueEmail}
                      valuePhone={this.props.valuePhone}
                      valueLinkedin={this.props.valueLinkedin}
                      valueGithub={this.props.valueGithub}
                      handleInputValue={this.props.handleInputValue}
                      inputFile={this.props.inputFile}
                      handleImage={this.props.handleImage}
                      errorName = {this.props.errorName}
                      errorEmail={this.props.errorEmail}
                      errorJob = {this.props.errorJob}
                      errorGithub = {this.props.errorGithub}
                      errorLinkedin={this.props.errorLinkedin}
                      handleReset={this.props.handleReset}
                      handleSwitchMode= {this.handleSwitchMode}
                      mode ={this.props.mode}

            />
          </CollapsableItem>

        <CollapsableItem collapsableTitle='Comparte'
                          handleCollapse={this.props.handleCollapse}
                          id = 'collapse-3'
                          activePanel = {this.props.activePanel}
                          icon = 'form__icon fas fa-share-alt'
                          rotatearrow = {this.props.rotatearrow}
                          handleSwitchMode= {this.handleSwitchMode}
                          mode ={this.props.mode}

        >
        
            <Share  errorName = {this.props.errorName}
                    errorEmail={this.props.errorEmail}
                    errorJob = {this.props.errorJob}
                    errorGithub = {this.props.errorGithub}
                    errorLinkedin={this.props.errorLinkedin}
                    cardURL={this.props.cardURL}
                    cardSuccess={this.props.cardSuccess}
                    fetchCardData={this.props.fetchCardData}
                    isLoading = {this.props.isLoading}
                    handleSwitchMode= {this.handleSwitchMode}
                    mode ={this.props.mode}
              />
        </CollapsableItem>

        </ul>
      </div>
    );
  }
}
FormAside.propTypes = {
valueName:PropTypes.string.isRequired,
valueJob:PropTypes.string.isRequired,
valueEmail: PropTypes.string.isRequired,
valuePhone: PropTypes.string,
valueLinkedin:PropTypes.string.isRequired,
valueGithub:PropTypes.string.isRequired,
}
export default FormAside;