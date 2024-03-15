function skillsMember() {
    return {
        restrict: 'E',
        tamplateUrl: 'modules/members/views/skills-member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };    
}