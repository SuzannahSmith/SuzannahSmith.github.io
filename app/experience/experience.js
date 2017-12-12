angular.module('suzieApp')
.controller('experienceController', ['$scope', 'scrollService',
	function($scope, scrollService) {

		$scope.pageTitle = 'Experience';

		$scope.skills = [
			['Programming:', 'Java, Python, C#, SQL, JavaScript, HTML, CSS'],
			['Proficient with:', 'AngularJS, Django, Git, Play Framework, jQuery, Bootstrap'],
			['Other:', 'Unity3D, HTC Vive, Oculus Rift, MS Office, GitHub, Bitbucket, IntelliJ, Jira, Photoshop, SourceTree, Slack, Trello'],
			['Operating Systems:', 'Linux, macOS, Windows'],
			['Languages:', 'English: fluent, French: working proficiency, German: basic skills']
		]

		$scope.awards = [
			['2014-2015', 'Edwin Jacob Special University Scholarship'],
			['2014-2015', 'Computer Science Prize I (awarded to the best student academically in first year)'],
			['2015-2016', 'MacFarlane-Reid Scholarship'],
			['2015-2016', 'Computer Science 40th Anniversary Scholarship'],
			['2015-2016', 'Edwin Jacob Special University Scholarship'],
			['2015-2016', "Dr. Francis Pang's Confucius Scholarship"],
			['2015-2016', 'Ellen S. Chambers Memorial Scholarship'],
			['2015-2016', 'Steadman Bucknell Henderson Memorial Scholarship'],
			['2015-2016', 'Greenblatt Shore Memorial Scholarship'],
			['2016-2017', 'Mr. & Mrs. Conrad J. Osman Scholarship'],
			['2016-2017', 'Harold Tam Wing-ming Scholarship'],
			['2016-2017', 'Computer Science Prize II (awarded to the best student academically in third year)'],
			['2016-2017', 'Richard Laurence Weldon Scholarship'],
			['2017', 'RISE Germany Scholarship'],
			['2017-2018', 'MacLauchlan McKenzie Scholarship: Women in Technology'],
			['2017-2018', 'Martha Fraser McIntosh Scholarship'],
			['2017-2018', 'UNB Scholarship']
		];

		console.log($scope.awards);

   		$scope.scrollToElement = function(elementId, offset){
   			scrollService(elementId, offset);
    	}
	}
]);