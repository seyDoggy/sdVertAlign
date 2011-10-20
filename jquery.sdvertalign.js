/*
	# sdVertAlign - vertical alignment function #

	AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
	VERSION: 2.1.0

	UPDATES:
	- (2.1.0) added options
	- (2.0.0) forked to jquery plugin
	- (1.0.0) initial release

	ARG DEFINITIONS:
	- parent is the containing element

	USAGE:
		$('.someInnerElement').sdVertAlign($('.someOuterElement'));
*/
 (function($) {
    $.fn.sdVertAlign = function() {
        var parent = $(this).parent(),
	        padMar = 'padding-top',
	        vcenterParentHeight = $(parent).innerHeight(true),
	        vcenterHeight = $(this).innerHeight(true),
	        pm = Array('m', 'margin'),
	        io = Array('o', 'outer', 'outerHeight'),
	        i = 0,
	        argLen = io.length;

        if (pm.length > io.length) argLen = pm.length;

        if ($.inArray(arguments[0], pm) && $.inArray(arguments[0], io) == -1) parent = arguments[0];

        for (i; i < argLen; i++) {
            if ($.inArray(arguments[i], pm)) padMar = 'margin-top';
            if ($.inArray(arguments[i], io)) vcenterParentHeight = $(parent).outerHeight(true), vcenterHeight = $(this).outerHeight(true);
        };

        $(this).css(padMar, ((vcenterParentHeight - vcenterHeight) / 2));
    };
})(jQuery);
/* END sdVertAlign */