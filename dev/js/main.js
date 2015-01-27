;$(function() {
    $('.js-simplePageWidget').each(function() {
        var $self = $(this),
            $contentNav = $('.content_nav', $self),
            $contentEntity = $('.content_entity', $self),
            $blockTitle = $('.block_title', $contentEntity),
            $contentEntityText = $('.content_entity_text', $contentEntity);

        $self
            .on('click', '.content_nav_item', function(event) {
                event.preventDefault();

                var $target = $(event.currentTarget),
                    $title = $('.content_nav_item_title', $target),
                    $text = $('.content_nav_item_text', $target);

                $blockTitle.html( $title.html() );
                $contentEntityText.html( $text.html() );

                $contentEntity.addClass('open');
            })
            .on('click', '.icon-menu', function(event) {
                event.preventDefault();

                $contentEntity.removeClass('open');
            });
    });
});