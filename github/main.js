var githubCmd = function() {
    this.desc = 'gitbub commands.';
    this.subCmds = {
        ls: {
            desc: "show repos.",
            Exec: function(command, terminal) {
                console.log('github ls command.');
            }
        }
    }
    this.TabComplete = function(commandline) {
        
    }
}
