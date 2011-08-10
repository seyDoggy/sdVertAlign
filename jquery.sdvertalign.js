/*
	# sdVertAlign - vertical alignment function #

	AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
	VERSION: 2.0.0

	UPDATES:
	- (2.0.0) forked to jquery plugin
	- (1.0.0) initial release

	ARG DEFINITIONS:
	- parent is the containing element

	USAGE:
		$('.someInnerElement').sdVertAlign($('.someOuterElement'));
*/
 (function($) {
    $.fn.sdVertAlign = function(parent) {
        var vcenterParentHeight = $(parent).innerHeight(true);
        var vcenterHeight = $(this).innerHeight(true);
        $(this).css('padding-top', ((vcenterParentHeight - vcenterHeight) / 2));
    };
})(jQuery);
/* END sdVertAlign */