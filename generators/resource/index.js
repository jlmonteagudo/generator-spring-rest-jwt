'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-spring-rest-jwt') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'resourceName',
      message: 'Resource Name?',
      default: 'ResourceName'
    }, {
      type: 'input',
      name: 'packageName',
      message: 'Package Name?',
      default: 'com.project.resource'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    var packagePath = this.props.packageName.replace(/\./g, '/');
    var lowerResourceName = this.props.resourceName.charAt(0).toLowerCase() + this.props.resourceName.slice(1);
    var options = { packageName: this.props.packageName, resourceName: this.props.resourceName, lowerResourceName: lowerResourceName };

    this.fs.copyTpl(
      this.templatePath('_Resource.java'),
      this.destinationPath('src/main/java/' + packagePath + '/' + this.props.resourceName + '.java'),
      options      
    );

    this.fs.copyTpl(
      this.templatePath('_ResourceRepository.java'),
      this.destinationPath('src/main/java/' + packagePath + '/' + this.props.resourceName + 'Repository.java'),
      options      
    );

    this.fs.copyTpl(
      this.templatePath('_ResourceRestController.java'),
      this.destinationPath('src/main/java/' + packagePath + '/' + this.props.resourceName + 'RestController.java'),
      options      
    );

  }

});
