import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';

class FlutterLogo extends StatelessWidget {
  const FlutterLogo({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(builder: (context, sizingInformation) {
      double imageSize =
          sizingInformation.deviceScreenType == DeviceScreenType.mobile
              ? 75
              : 100;

      return Image.asset(
        'assets/flutter_logo.png',
      );
    });
  }
}
