<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit7f87ef61d4de8ae9c2f21884a6e88416
{
    public static $files = array (
        'fdf50b5686baa04c4fbb560faf7effac' => __DIR__ . '/../..' . '/src/Test.php',
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit7f87ef61d4de8ae9c2f21884a6e88416::$classMap;

        }, null, ClassLoader::class);
    }
}
