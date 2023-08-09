function skillsMember(){
return{
    restrict: 'E',
    templateUrl: `modules/skills/views/member.html`,
    controller: 'SkillsMemberConrtoller',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member: '='
    }
    };
}