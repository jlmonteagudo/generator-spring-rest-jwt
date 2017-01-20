'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');


module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('generator-spring-rest-jwt') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Project Name?',
      default: 'ProjectName'
    }, {
      type: 'input',
      name: 'packageName',
      message: 'Package Name?',
      default: 'com.project'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    var packagePath = this.props.packageName.replace(/\./g, '/');

    // root project files

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(this.props.projectName + '/.gitignore')
    );

    this.fs.copy(
      this.templatePath('mvnw'),
      this.destinationPath(this.props.projectName + '/mvnw')
    );

    this.fs.copy(
      this.templatePath('mvnw.cmd'),
      this.destinationPath(this.props.projectName + '/mvnw.cmd')
    );

    this.fs.copy(
      this.templatePath('pom.xml'),
      this.destinationPath(this.props.projectName + '/pom.xml')
    );


    //java files
    var options = { packageName: this.props.packageName, projectName: this.props.projectName };

    this.fs.copyTpl(
      this.templatePath('src/main/java/admin/_AdminRestController.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/admin/AdminRestController.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/_Application.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/' + this.props.projectName + 'Application.java'),
      options      
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/config/_WebSecurityConfig.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/config/WebSecurityConfig.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/controller/_AuthenticationRestController.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/controller/AuthenticationRestController.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/controller/_UserRestController.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/controller/UserRestController.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/model/_Authority.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/model/Authority.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/model/_AuthorityName.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/model/AuthorityName.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/model/_User.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/model/User.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/repository/_UserRepository.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/repository/UserRepository.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/service/_JwtAuthenticationResponse.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/service/JwtAuthenticationResponse.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/service/_JwtUserDetailsServiceImpl.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/service/JwtUserDetailsServiceImpl.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtAuthenticationEntryPoint.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtAuthenticationEntryPoint.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtAuthenticationRequest.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtAuthenticationRequest.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtAuthenticationTokenFilter.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtAuthenticationTokenFilter.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtTokenUtil.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtTokenUtil.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtUser.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtUser.java'),
      options
    );

    this.fs.copyTpl(
      this.templatePath('src/main/java/security/_JwtUserFactory.java'),
      this.destinationPath(this.props.projectName + '/src/main/java/' + packagePath + '/security/JwtUserFactory.java'),
      options
    );


    //resource files

    this.fs.copyTpl(
      this.templatePath('src/main/resources/'),
      this.destinationPath(this.props.projectName + '/src/main/resources/'),
      options
    );

    mkdirp.sync(this.props.projectName + '/src/main/resources/static/');
    mkdirp.sync(this.props.projectName + '/src/main/resources/templates/');

    //test files

    this.fs.copyTpl(
      this.templatePath('src/test/java/_ApplicationTests.java'),
      this.destinationPath(this.props.projectName + '/src/test/java/' + packagePath + '/' + this.props.projectName + 'ApplicationTests.java'),
      options
    );
    


  },


});
